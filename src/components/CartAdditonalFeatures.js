import React from 'react'
import better from "../assets/better.jpeg";
import mastercard from "../assets/mastercard.png";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";




const CartAdditonalFeatures = () => {
    return (
        <div className='payemntIconHold flex gap-12 flex-row relative top-10'>
            <FaCcVisa className=' w-96 h-44' />
            <FaCcPaypal className=' w-96 h-44' />
            <FaCcMastercard className=' w-96 h-44' />
            <FaCcStripe className=' w-96 h-44' />
        </div>
    )
}

export default CartAdditonalFeatures