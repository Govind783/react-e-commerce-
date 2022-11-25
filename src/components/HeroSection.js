import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"


const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>

            <p className='text-4xl mt-20 text-center welcomStore'>WELCOME TO OUR STORE</p>
            <br />
            <br />


            <p className='heroDescription relative text-xl flex flex-wrap'> The self care brand that's setting a new standard. Natural products, to help
                you feel good in your own body. </p>


            <div className='heroPicHold flex flex-row '>
                <img src={one} className=" w-20" />
                <img src={two} className=" w-20" />
                <img src={three} className=" w-20" />
            </div>

            <div className=' text-xl font-medium flex flex-row heroHeadingHold'>
                <p> Powered By Nature </p>
                <p> Exceptional Quality </p>
                <p> Skin First Formulas </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal'>
                <p> Aliquam venenatis vel lorem id <br /> nuaer mollis eget. </p>
                <p> Nulla tincidunt gravida augue, eget <br /> pellentesque. </p>
                <p> Aliquam sed diam fringilla, loborti <br /> sorci nec </p>
            </div>
        </div>
    )
}

export default HeroSection