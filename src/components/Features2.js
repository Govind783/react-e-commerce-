import React from 'react'
import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Features2 = () => {
    return (
        <div>

            <div className='featPicHold flex flex-col left-8 mt-2 gap-12 relative'>
                <FaShippingFast className=' w-16 h-20' />
                <img src={better} alt="hey" className="w-20" />
                <FaLock className=' w-11 h-20' />
            </div>

            <div className=' flex fof flex-col featHeadingHold gap-28 relative text-xl whitespace-nowrap'>
                <p> 2 DAY SHIPPING </p>
                <p> EASY RETURNS </p>
                <p> SECURE CHECKOUT </p>
            </div>
        </div>
    )
}

export default Features2