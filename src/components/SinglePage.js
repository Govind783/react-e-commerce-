import React from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../productsStore/Store';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import "../styles/SinglePage.css";
import { AiFillStar } from "react-icons/ai";
import SinglePageFAQ from './SinglePageFAQ';

import AutoPlayMethods from './SingleAlsoLike';
import JournalSection from "./JournalSection"
import SearchBox from './SearchBox';
import Review1 from './Review1';

import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import SPFooter from './SPFooter';
import {GiCardboardBoxClosed} from "react-icons/gi";
import { useToast } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";


const SinglePage = () => {


  const params = useParams();

  const { id } = params;

  const dispacth = useDispatch();

  const addItemToCartHandler = (e) => {

    dispacth(
      cartActions.addItemToCart({
        id,
        price,
        title,
        image,
      })
    )
  }


  const prodClicked = store.find((item) => item.id === id)

  var { name, price, primaryImage, hoverImg } = prodClicked;


  let title = name;

  var image = primaryImage;

  let tempImage = image;

  



  const [activeImg, SetActiveImg] = useState(primaryImage);
  const [imgChnage, SetImgChange] = useState(false);



  const imgSrcTarget = (e) => {
    SetActiveImg(e.target.src);
    SetImgChange(true);

  }

  const defaultImageSrc = () => {
    SetActiveImg(primaryImage)
    SetImgChange(false)
  }


  let numOfRev = Math.floor(Math.random() * (4 - 4 + 1)) + 4;
  let reviews = Math.floor(Math.random() * (999 - 100 + 1) + 100);


    const toast = useToast()
  
  return (
    <div className='singlePageMainParent relative top-36'>

      <div className="bgGrey h-14 sinLih">
        <BreadCrumb name={title} />
      </div>



      <figure className='singlePageMainPicHold relative'>
        {imgChnage === true ? <img src={activeImg} className=" w-48 cursor-pointer rounded-2xl object-cover singlePageMainPic" /> : <img src={image} className=" w-48 cursor-pointer rounded-2xl object-cover singlePageMainPic" />}
      </figure>




      <div className='sideImageHold flex flex-col relative gap-12'>
        <img src={hoverImg} className=" w-64 cursor-pointer  object-cover" onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/NO_Lists_for_Site-SIG_21bc4fd3-c2b5-4e21-8244-1f0f61cce160_540x.png?v=1599504641' className='w-64 cursor-pointer rounded-lg object-cover' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
      </div>

      <div className='bottomImgHold flex flex-row relative gap-8'>
        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/anysiaalice_image_720x.jpg?v=1599504641' className=' w-80 si cursor-pointer object-cover' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/products/anysiaalice_quote-1_720x.jpg?v=1599504641' className=' w-80 si cursor-pointer object-cover' id='mobileDontSHow' onMouseEnter={imgSrcTarget} onMouseLeave={defaultImageSrc} />
      </div>


      <div className='namePriceSP relative fof flex flex-col gap-6'>
        <p className='font-semibold text-xl w-80'> {name} </p>
        <p className='text-xl sp relative'> ${price} </p>
      </div>

      <p className='relative singleLinetop text-gray-300'> ___________________________________________________________________  </p>




      <div className=' relative gap-2 flex starHold'>
        {numOfRev === 1 ? <div className='flex'>  <AiFillStar /> </div> : ""}
        {numOfRev === 2 ? <div className='flex'> <AiFillStar /> <AiFillStar />  </div> : ""}
        {numOfRev === 3 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
        {numOfRev === 4 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
        {numOfRev === 5 ? <div className='flex'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}

        <p className='font-semibold l1rem'>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviewes </p>
      </div>


      <p className='font-semibold text-md relative loyalty'> YOU CAN EARN 50 LOAYLTY POINTS </p>

      <div className='spBtnHold relative' onClick={() =>
        toast({
          title: '',
          description: "Successfully Added",
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
      }>
        <button className='spAddTOCart' onClick={addItemToCartHandler}> ADD TO CART </button>
      </div>

      <div>
        <SinglePageFAQ />
      </div>

      <p className='fof text-4xl spText absolute text-center'> YOU MAY ALSO LIKE </p>
      <AutoPlayMethods />

      <Review1 starCalc={numOfRev} rev={reviews} />

      <SearchBox />


      <div className='jsParent'>
        <JournalSection />
      </div>

   



      <div className='footerFeatures2 flex flex-row absolute'>
        <FaShippingFast className='w-16 h-20 sv' />
        <FaLock className='w-12 h-16 sv2' />
        <BsCurrencyDollar className='w-16 h-20 sv' />
        <GiCardboardBoxClosed className='w-16 h-20 sv' />
      </div>

      <div className='footerFeatures2TextHold fof flex flex-row absolute uppercase'>
        <p> 2 DAY DELIVERY </p>
        <p> secure checkout </p>
        <p> royalty points </p>
        <p className='ml'> easy returns </p>
      </div>

      <div className='spfooterHold absolute'>
        <SPFooter />
      </div>

    </div>
  )
}

export default SinglePage
