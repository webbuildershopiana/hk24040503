import type { Product } from '@/types';

// import type { InferGetStaticPropsType } from 'next';

import { getLayout } from '@/components/layouts/layout';

import { AttributesProvider, useAttributes } from '@/components/products/details/attributes.context';

import Seo from '@/components/seo/seo';

import { useWindowSize } from '@/lib/use-window-size';

import ProductQuestions from '@/components/questions/product-questions';

import AverageRatings from '@/components/reviews/average-ratings';

import ProductReviews from '@/components/reviews/product-reviews';

import isEmpty from 'lodash/isEmpty';

import dynamic from 'next/dynamic';

import parse from 'html-react-parser';

import { ThumbsCarousel } from '@/components/ui/thumb-carousel';

import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import GeneralLayout from '@/components/layouts/_general';

import { toast } from 'react-toastify';

import usePrice from '@/lib/use-price';

import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';

import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import client from '@/framework/client';
import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';
import { formatProductData, formatAllProducts, formatProductImages } from '@/lib/format-api-data';
import { getVariations } from '@/lib/get-variations';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { isEqual } from 'lodash';
import AddToCartInfo from '@/components/products/details/add-to-cart-info';
import ProductVariationPrice from '@/components/products/details/product-variation-price';
import { thumb_images } from '@/store/thumb-images-atom';

export const getServerSideProps: any = async (context: any) => {

  try {
    const { params } = context;
    const { slug } = params;

    const productResponse: any = await client.products.get(slug);
    // console.log(productResponse);
    
    const product = productResponse && formatProductData(productResponse);
    
    if (!product) {
      throw Error();
    }
    return {
      props: {
        product
      },
    };
  } catch (error) {
    console.log(error);
    
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}


const ProductPage: any = ({ product }: any) => {
  
  const { width } = useWindowSize();
  const router = useRouter();
  const { slug } = router.query;
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isAuthorize] = useAtom(authorizationAtom);
  const { attributes, setAttributes } = useAttributes();
  const [gallery, setGallery] = useAtom(thumb_images);

  const variations:any = useMemo(
    () => getVariations(product?.variations),
    [product?.variations]
  );

  // console.log("variations......",variations);
  const isSelected = isVariationSelected(variations, attributes);

  let selectedVariation: any = {};
        
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) => {
      return isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort()
      )
    }
    );
  }
  const hasVariations = !isEmpty(variations);

  //[[UI_HOOK]]
  useEffect(() => {
    fetchData();
  }, [slug]);

  useEffect(() => {
    if (Object.keys(variations).length === 0) {
      // Handle the case where variations is empty
      return;
    }
  
    let defaultVariation = {};
    let galleryImagesCollection:any = [];
    // console.log('log variations....' , variations);
    if (variations && typeof variations === 'object' && Object.keys(variations).length > 0) {
      for (const v in variations) {
        if (Object.prototype.hasOwnProperty.call(variations, v) && Array.isArray(variations[v]) && variations[v].length > 0) {
          const defaultAttributeObj = variations[v][0];
          if (defaultAttributeObj && typeof defaultAttributeObj === 'object') {
            const defaultImages:any = defaultAttributeObj?.attribute?.values?.[0]?.images;
            if (defaultImages) {
              defaultVariation = { ...defaultVariation, [v]: defaultAttributeObj.value };
              galleryImagesCollection.push(...defaultImages)
              // console.log("galleryImagesCollection ---------->>>>>>" ,galleryImagesCollection);
              
              // setGallery([...gallery, ...defaultImages]);
              
            }
          }
        }
      }
    }
    setGallery(galleryImagesCollection);
    setAttributes((prev: any) => ({
      ...prev,
      ...defaultVariation
    }));
    // console.log('default variation', defaultVariation);
    
  
  }, [variations]);
  
  // useEffect(() => {
  //   console.log('galleery updated....' , gallery);
  //   gallery.map((i) => console.log(i.id))
    
  // }, [gallery])
  

  const fetchData = async () => {
    try {
      if (slug) {
        let product = await client.products.get(slug);

        let relatedProducts: Product[] = await client.products.relatedProducts(product.id, DEFAULT_STORE_CODE)
        const formatedRelatedProducts = formatAllProducts(relatedProducts) ?? [];
        setRelatedProducts(formatedRelatedProducts)
      }
    } catch (error) {
      toast.error(error?.message)
    }
  };

  // console.log(selectedVariation);
  // console.log(product.images);
  

  return (
    // <AttributesProvider>
    <>
      {product && <>

        <div className="container px-4 py-2" id="ih8ga8">
          <div className="row p-2 row-cols-1 row-cols-sm-2 row-cols-md-2" id="iwh24l">
            <div className="col" id="i8wrgz">
              <div id="i9va46">
                <ThumbsCarousel
                  gallery={gallery ?? []}
                  hideThumbs={gallery.length <= 1}
                />
              </div>
            </div>
            <div className="col" id="i7fjbw">
              <div className="text-uppercase" id="i4m0qg">
                <p className="text-truncate px-3">
                  {product.name}
                </p>
              </div>
              <div className="d-flex justify-content-cente align-item-center m-0" id="ianc1l">
                <p className="text-truncate px-3 mb-3">
                  {usePrice({ amount: product.price }).price}
                </p>
              </div>
              <ProductVariationPrice hasVariations={hasVariations} product={product} selectedVariation={selectedVariation} variations={variations} />
              <div className="mb-3 w-full lg:mb-0 lg:max-w-[400px]">
                {
                  product &&
                  <AddToCart
                    data={product}
                    variant="big"
                    variation={selectedVariation}
                    disabled={
                      selectedVariation?.is_disable ||
                      !isSelected ||
                      product?.quantity <= 0 || !product?.available
                    }
                    />
                }
              </div>
              <AddToCartInfo hasVariations={hasVariations} product={product} selectedVariation={selectedVariation} />
            </div>
          </div>
        </div>

        <section id="icxeaz">
          <div className="container p-0" id="im4nnd">
            <div id="i2tzbv">
              Description
            </div>
          </div>
          <div className="container p-0" id="ilwglk">
            <div className="w-100" id="id4r0y">
              <p className="text-truncate px-3" data-gjs-type="product-description">
                {parse(product?.description)}
              </p>
            </div>
          </div>
        </section>
      </>
      }
      </>
    // </AttributesProvider>
  );
};
// ProductPage.getLayout = getLayout;
ProductPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default ProductPage;