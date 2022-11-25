import React from 'react'
import "../styles/Ingridients.css"

import ing1 from "../assets/ing1.png";
import ing2 from "../assets/ing2.png";
import ing3 from "../assets/ing3.png";
import ing4 from "../assets/ing4.png";
import ing5 from "../assets/ing5.png";
import ing6 from "../assets/ing6.png";


const Ingridients = () => {
    return (
        <div className='ingMainParent'>
            <p className=' text-4xl ogtext font-medium text-center mb-16'> OUR INGRIDENTS </p>

            <div className='ingImgHold flex flex-row gap-36 justify-center'>
                <img src={ing1} className="zoom2" />
                <img src={ing2} className="zoom2" />
                <img src={ing3} className="zoom2" />
                <img src={ing4} className="zoom2" />
                <img src={ing5} className="zoom2" />
                <img src={ing6} className="zoom2" />
            </div>

            <div className='ingTextHold flex flex-row gap-32 justify-center'>
                <p>All Natural</p>
                <p> Vegetables </p>
                <p> Fruits </p>
                <p> Vegan </p>
                <p> Essential Oils</p>
                <p> Botanical </p>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



        </div>
    )
}

export default Ingridients