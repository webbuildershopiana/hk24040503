import type { NextPageWithLayout } from '@/types';

import type { InferGetStaticPropsType } from 'next';

import { useEffect } from 'react';

import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';

import { scroller } from 'react-scroll';

import HomeLayout from '@/components/layouts/_home';

import Seo from '@/components/seo/seo';

import { useWindowSize } from '@/lib/use-window-size';

import { useType } from '@/framework/type';

import client from '@/framework/client';

import Link from 'next/link';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import JoinButton from '@/components/layouts/menu/join-button';

import GeneralLayout from '@/components/layouts/_general';

import { drawerAtom } from '@/store/drawer-atom';

import parse from 'html-react-parser';

import usePrice from '@/lib/use-price';

import { getStaticProps, getStaticPaths } from 'next';

import {FormattedNumber} from 'react-intl'
import { useIsRTL } from '@/lib/locals';

import { useState } from 'react';

import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';

import { FreeMode, Mousewheel } from 'swiper';

import { ArrowNextIcon } from '@/components/icons/arrow-next';

import { ArrowPrevIcon } from '@/components/icons/arrow-prev';

import { STATIC_CONTENT } from '@/lib/constants/static-content';
import { formatAllProducts} from '@/lib/format-api-data';





export async function getStaticPaths() {
  // Return dummy paths
  return {
    paths: ['/'],
    fallback: true // or 'blocking' if using incremental static regeneration
  };
}

export async function getStaticProps() {
  try {
    const allProductReqData: any = {
                                    categorySlugs:"",
count:"30",

                                    };
                                    const allProductResponse: any = await client.products.all(allProductReqData);
                                    const allProducts = formatAllProducts(allProductResponse?.products);
//[[API_DATA]]

    return {
      props: {    
        allProducts: allProducts ?? [],
//[[API_DATA_PROP]]

      },
    };
  } catch (error) {
    // console.log(error);
    return {}
  }
}
const Home:any = ({ 
  allProducts,
//[[UI_VARIABLE]]


 }:any) => {
   const [allProductsNextEl, setAllProductNextEl] = useState<HTMLElement | null>(null);
const [allProductsPrevEl, setAllProductPrevEl] = useState<HTMLElement | null>(null);
const [, ] = useState<HTMLElement | null>(null);
const { isRTL } = useIsRTL();
const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
const breakpoints = {
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    280: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    380: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    430: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    570: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1100: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1536: {
      slidesPerView: 7,
      spaceBetween: 24,
    },
    1800: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    2600: {
      slidesPerView: 7,
      spaceBetween: 40,
    },
  };
//[[UI_HOOK]]
  useEffect(() => {
    // console.log("test use r")
    const commonScript = document.createElement("script");
    commonScript.src = "/assets/script.js";
    document.head.appendChild(commonScript);
    return () => {
      document.head.removeChild(commonScript);
    };
  }, []);

  return (
    <>
      <body id="iz9o">
 <div className="container-fluid p-0" id="ig08a2">
  <div className="carousel slide" id="carouselExampleCaptions-5b3f09c2-6850-432c-8012-c1ec0b240d36">
   <div className="carousel-indicators">
    <div aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions-5b3f09c2-6850-432c-8012-c1ec0b240d36" id="igczvy" type="button">
    </div>
    <div aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions-5b3f09c2-6850-432c-8012-c1ec0b240d36" id="iabfh7" type="button">
    </div>
    <div aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions-5b3f09c2-6850-432c-8012-c1ec0b240d36" id="iuttoh" type="button">
    </div>
   </div>
   <div className="carousel-inner">
    <div className="carousel-item active">
     <img alt="..." className="d-block w-100" id="i001pf" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"/>
     <div className="carousel-caption d-none d-md-block h-100">
      <div className="text-light p-3 h-100 d-flex flex-column justify-content-center align-items-center" id="iki0jq">
       <p className="pb-3">
        “Testimonials provide a sense of what it's like to work with you or use your products.
        <br/>
        Change the text and add your own."
       </p>
       <h5>
        Alexa young, CA
       </h5>
      </div>
     </div>
    </div>
    <div className="carousel-item">
     <img alt="..." className="d-block w-100" id="imzzzd" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"/>
     <div className="carousel-caption d-none d-md-block h-100">
      <div className="text-light p-3 h-100 d-flex flex-column justify-content-center align-items-center">
       <p className="pb-3">
        “Testimonials provide a sense of what it's like to work with you or use your products.
        <br/>
        Change the text and add your own."
       </p>
       <h5>
        Alexa young, CA
       </h5>
      </div>
     </div>
    </div>
    <div className="carousel-item">
     <img alt="..." className="d-block w-100" id="ijo0h9" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"/>
     <div className="carousel-caption d-none d-md-block h-100">
      <div className="text-light p-3 h-100 d-flex flex-column justify-content-center align-items-center">
       <p className="pb-3">
        “Testimonials provide a sense of what it's like to work with you or use your products.
        <br/>
        Change the text and add your own."
       </p>
       <h5>
        Alexa young, CA
       </h5>
      </div>
     </div>
    </div>
   </div>
   <div className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions-5b3f09c2-6850-432c-8012-c1ec0b240d36">
    <span aria-hidden="true" className="carousel-control-prev-icon" id="ihby5k">
    </span>
    <span className="visually-hidden" id="inxwuw">
     Previous
    </span>
   </div>
   <div className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleCaptions-5b3f09c2-6850-432c-8012-c1ec0b240d36">
    <span aria-hidden="true" className="carousel-control-next-icon">
    </span>
    <span className="visually-hidden">
     Next
    </span>
   </div>
  </div>
 </div>
 <section className="container-fluid p-5 bg-light" id="i43l2p">
  <div className="container">
   <div className="row row-cols-md-2" id="if2a0c">
    <div className="col-md-4 col-12 p-0" id="irwvw1">
     <img alt="About-Image" className="img-fluid w-100 h-100" id="iet6zi" src="https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    <div className="col-md-8 col-12" id="ig7ubb">
     <div className="d-flex flex-column justify-content-center px-sm-5 px-2 py-5 text-black">
      <h1>
       About
      </h1>
      <h4>
       My Name is Alex Lawather
      </h4>
      <p className="mt-2 mb-3">
       Briefly introduce yourself and share something interesting with website visitors. Double click to edit the text.
      </p>
      <button className="btn btn-secondary text-white" type="button">
       About Me
      </button>
     </div>
    </div>
   </div>
  </div>
  <div className="container" collection-name="all" collection-type="product" count="30" id="i6g6tc">
   <div className="row relative" data-gjs-type="product-gird">
    <Swiper
                        id="category-card-menu"
                        modules={[Navigation, FreeMode, Mousewheel]}
                        navigation={{
                            prevEl:allProductsPrevEl,
                            nextEl:allProductsNextEl,
                            disabledClass: 'swiper-button-disabled',
                            hiddenClass: 'swiper-button-hidden',
                            }}
                            breakpoints={breakpoints}
                            slidesPerView={4}
                            mousewheel={true}
                            freeMode={true}
                            >{allProducts?.map((product: any, key: any) => {
                                return (
                                    <>
                                    <SwiperSlide key={key}>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 py-3 w-full" data-gjs-type="product-card"><Link href={product.href}><div className="shadow pb-2 shopiana-bg-white"><div data-gjs-type="product-img"><img className="w-100 object-fit-cover shopiana-product-image-height" src={product.image?.imageUrl}/></div><div data-gjs-type="product-name"><p className="text-truncate px-3">{product.name}</p></div><div data-gjs-type="product-description"><p className="px-3" data-gjs-type="product-description">{parse(product?.description)}</p></div><div data-gjs-type="product-price"><p className="text-truncate px-3 mb-3"><FormattedNumber value={product.price} style="currency" currency="INR" /></p></div></div></Link></div>
                                    </SwiperSlide>
                                    </>
                                    );
                                    })}</Swiper>
                                    <div
                                        ref={(node) => setAllProductPrevEl(node)}
                                        className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-prev text-heading bg-light shadow-300 top-[40%] ltr:-left-4 rtl:-right-4 focus:outline-none transition-colors hover:text-orange-500"
                                    >
                                        <span className="sr-only">{STATIC_CONTENT['text-previous']}</span>
                                        {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
                                    </div>
                                    <div
                                        ref={(node) => setAllProductNextEl(node)}
                                        className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 rounded-full outline-none cursor-pointer banner-slider-next text-heading bg-light shadow-300 top-[40%] ltr:-right-4 rtl:-left-4 focus:outline-none transition-colors hover:text-orange-500"
                                    >
                                        <span className="sr-only">{STATIC_CONTENT['text-next']}</span>
                                        {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
                                    </div>
   </div>
  </div>
  <section className="container-fluid bg-light text-black py-5" id="ipsjmg">
   <div className="container text-center">
    <h1>
     Services
    </h1>
    <p className="mt-3">
     Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content.
    </p>
    <div className="row">
     <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5">
      <img alt="service-image" className="img-fluid rounded-circle" id="iaht7k" src="https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <h4 className="mt-4 mb-4">
       Service Name
      </h4>
      <p className="px-xl-5 px-2">
       Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.
      </p>
     </div>
     <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5">
      <img alt="service-image" className="img-fluid rounded-circle" id="i0nk0v" src="https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <h4 className="mt-4 mb-4">
       Service Name
      </h4>
      <p className="px-xl-5 px-2">
       Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.
      </p>
     </div>
     <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center flex-column mt-5">
      <img alt="service-image" className="img-fluid rounded-circle" id="id20tg" src="https://images.pexels.com/photos/1088614/pexels-photo-1088614.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      <h4 className="mt-4 mb-4">
       Service Name
      </h4>
      <p className="px-xl-5 px-2">
       Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.
      </p>
     </div>
    </div>
   </div>
  </section>
  <div className="container-fluid p-4 bg-white" id="iwc4w4">
   <div className="container justify-content-center text-center">
    <div className="text pb-3">
     <h1>
      Our Happy Client
     </h1>
     <p id="i8nlpi">
      "Add a testimonial that a happy customer or client has said  about working with you."
     </p>
     <p className="fw-bold">
      Amanda Johns,COO,HORIZON
     </p>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2 g-lg-3">
     <div className="col">
      <div>
       <img alt="..." className="w-100" src="https://getwallpapers.com/wallpaper/full/f/7/6/1417349-beautiful-green-hills-wallpaper-1920x1200-pictures.jpg"/>
      </div>
     </div>
     <div className="col">
      <div>
       <img alt="..." className="w-100" src="https://getwallpapers.com/wallpaper/full/f/7/6/1417349-beautiful-green-hills-wallpaper-1920x1200-pictures.jpg"/>
      </div>
     </div>
     <div className="col">
      <div>
       <img alt="..." className="w-100" src="https://getwallpapers.com/wallpaper/full/f/7/6/1417349-beautiful-green-hills-wallpaper-1920x1200-pictures.jpg"/>
      </div>
     </div>
     <div className="col">
      <div>
       <img alt="..." className="w-100" src="https://getwallpapers.com/wallpaper/full/f/7/6/1417349-beautiful-green-hills-wallpaper-1920x1200-pictures.jpg"/>
      </div>
     </div>
     <div className="col">
      <div>
       <img alt="..." className="w-100" src="https://getwallpapers.com/wallpaper/full/f/7/6/1417349-beautiful-green-hills-wallpaper-1920x1200-pictures.jpg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div className="container-fluid bg-white d-flex justify-content-center align-items-center py-5" id="iw3itt">
   <div className="container-fluid d-flex justify-content-center align-items-center">
    <div className="bg-white w-100 p-5">
     <div className="text-center">
      <h1 className="fw-normal text-uppercase">
       STAY IN THE KNOW
      </h1>
      <p>
       Join our email list and get access to special deals exclusive to our subscribe.
      </p>
     </div>
     <div className="mt-4">
      <form action="" id="iued78">
       <label className="form-label" for="exampleInputEmail1">
        Enter your email here*
       </label>
       <div className="input-group">
        <input className="form-control w-75 py-3" inputmode="email" required="" type="email"/>
        <button className="btn w-25 py-3 text-white" id="i4cz7d" type="submit">
         Sign Up
        </button>
        <p className="card-text">
         <small className="text-muted">
          Thanks for submitting !!
         </small>
        </p>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
  <footer className="text-center text-lg-start text-muted w-100 bg-white" id="ie91gn">
   
   <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
     <span>
      Get connected with us on social networks:
     </span>
    </div>
    
    
    <div>
     <a className="me-4 text-reset" href="">
      <svg className="bi bi-facebook" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
       <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
       </path>
      </svg>
     </a>
     <a className="me-4 text-reset" href="">
      <svg className="bi bi-linkedin" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
       <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
       </path>
      </svg>
     </a>
     <a className="me-4 text-reset" href="">
      <svg className="bi bi-twitter" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
       <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
       </path>
      </svg>
     </a>
     <a className="me-4 text-reset" href="">
      <svg className="bi bi-instagram" fill="currentColor" height="26" viewbox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg">
       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
       </path>
      </svg>
     </a>
    </div>
    
   </section>
   
   
   <section>
    <div className="container text-center text-md-start mt-5">
     
     <div className="row mt-3">
      
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
       <h6 className="text-uppercase fw-bold mb-4">
        <i className="fas fa-gem me-3">
        </i>
        Company name
       </h6>
       <p>
        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
       </p>
      </div>
      
      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
       <h6 className="text-uppercase fw-bold mb-4">
        Products
       </h6>
       <p>
        <a className="text-reset" href="#!">
         Angular
        </a>
       </p>
       <p>
        <a className="text-reset" href="#!">
         React
        </a>
       </p>
       <p>
        <a className="text-reset" href="#!">
         Vue
        </a>
       </p>
       <p>
        <a className="text-reset" href="#!">
         Laravel
        </a>
       </p>
      </div>
      
      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
       <h6 className="text-uppercase fw-bold mb-4">
        Useful links
       </h6>
       <p>
        <a className="text-reset" href="#!">
         Pricing
        </a>
       </p>
       <p>
        <a className="text-reset" href="#!">
         Settings
        </a>
       </p>
       <p>
        <a className="text-reset" href="#!">
         Orders
        </a>
       </p>
       <p>
        <a className="text-reset" href="#!">
         Help
        </a>
       </p>
      </div>
      
      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
       <h6 className="text-uppercase fw-bold mb-4">
        Contact
       </h6>
       <p>
        <i className="fas fa-home me-3">
        </i>
        New York, NY 10012, US
       </p>
       <p>
        <i className="fas fa-envelope me-3">
        </i>
        info@example.com
       </p>
       <p>
        <i className="fas fa-phone me-3">
        </i>
        + 01 234 567 88
       </p>
       <p>
        <i className="fas fa-print me-3">
        </i>
        + 01 234 567 89
       </p>
      </div>
      
     </div>
     
    </div>
   </section>
   
   
   <div className="text-center p-4" id="iiv45e">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
     Shopiana.com
    </a>
   </div>
   
  </footer>
  
 </section>
</body>

      
    </>
  );
};
Home.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default Home;
