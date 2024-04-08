import { useTranslation } from 'next-i18next';

import { DEFAULT_STORE_CODE } from '@/framework/utils/constants';

import client from '@/framework/client';

import Link from 'next/link';

import GeneralLayout from '@/components/layouts/_general';

import { useEffect } from 'react';




export const getServerSideProps: any = async () => {
  try {
    //[[API_DATA]]
    return {
      props: {    
        //[[API_DATA_PROP]]
      },
    };
  } catch (error) {
    console.log(error);
    return {}
  }
}

const page2Page = ({ 
  //[[UI_VARIABLE]]

 }:any)=> {
  useEffect(() => {
    // console.log("test use r")
    const commonScript = document.createElement("script");
    commonScript.src = "/assets/script.js";
    document.head.appendChild(commonScript);
    return () => {
      document.head.removeChild(commonScript);
    };
  }, []);
 
//[[UI_HOOK]]
  return (
    <>
    <body id="iaf8gs">
 <div className="container-fluid p-0" id="icm5ug">
  <div className="carousel slide" id="carouselExampleCaptions-7847de9f-3d55-4af5-abb5-f413a7109f75">
   <div className="carousel-indicators">
    <div aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions-7847de9f-3d55-4af5-abb5-f413a7109f75" id="iryk0g" type="button">
    </div>
    <div aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions-7847de9f-3d55-4af5-abb5-f413a7109f75" id="is9une" type="button">
    </div>
    <div aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions-7847de9f-3d55-4af5-abb5-f413a7109f75" id="i23l8j" type="button">
    </div>
   </div>
   <div className="carousel-inner">
    <div className="carousel-item active">
     <img alt="..." className="d-block w-100" id="ikxduw" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"/>
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
     <img alt="..." className="d-block w-100" id="irdrm7" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"/>
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
     <img alt="..." className="d-block w-100" id="i6vnw3" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"/>
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
   <div className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions-7847de9f-3d55-4af5-abb5-f413a7109f75">
    <span aria-hidden="true" className="carousel-control-prev-icon">
    </span>
    <span className="visually-hidden">
     Previous
    </span>
   </div>
   <div className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleCaptions-7847de9f-3d55-4af5-abb5-f413a7109f75">
    <span aria-hidden="true" className="carousel-control-next-icon">
    </span>
    <span className="visually-hidden">
     Next
    </span>
   </div>
  </div>
 </div>
</body>

    </>
  );
};
page2Page.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default page2Page;
