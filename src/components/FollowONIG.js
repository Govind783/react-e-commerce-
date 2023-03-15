import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "../styles/FollowONIG.css";
import { store } from '../productsStore/Store';
import "react-alice-carousel/lib/alice-carousel.css";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import { ExternalLink } from 'react-external-link';
import Marquee from "react-fast-marquee";


const FollowONIG = () => {

  const responsive = {
    2000: {
      items: 11,
    },
    1600: {
      items: 6
    },
    1200: {
      items: 5,
    },
    800: {
      items: 3,
    },
    0: {
      items: 1,
    },
  };

  return (
    <div className=' flex flex-row gap-28  mt-44 flex-wrap mb-36'>
      <p className='igText '> FOLLOW US ON INSTAGRAM </p>

      <div className='followOnInstaMarqueeConatiner'>

        <Marquee pauseOnHover={true} speed={100} >

          <ExternalLink href='https://www.instagram.com/reel/Ck6akcopA_F/' >
            <img src={i1} className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ck9DOsWLEdw/'>
            <img src={i2} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ck_u9AjOJFh/'>
            <img src={i3} className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkgnyuWu_u7/'>
            <img src={i4} className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/p/CkeOeuMvliW/'>
            <img src={i5} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkgnyuWu_u7/'>
            <img src={i6} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ckg4wazO9SQ/'>
            <img src={i7} className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkjTteAMPaZ/'>
            <img src={i8} className=' w-60 rounded-2xl   mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CklzQFcJW9a/'>
            <img src={i9} className=' w-60 rounded-2xl  mrMl carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/CkwQD6KO1WP/'>
            <img src={i10} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

          <ExternalLink href='https://www.instagram.com/reel/Ckg4wazO9SQ/'>
            <img src={i11} className=' w-60 rounded-2xl  mrMl  carouselIMg' />
          </ExternalLink>

        </Marquee>
      </div>

    </div>



  )
}

export default FollowONIG
