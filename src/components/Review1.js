import React from 'react'
import { AiFillStar } from "react-icons/ai"
import feel from "../assets/feel.png";


const Review1 = (props) => {
    const starCalc = props.starCalc;
    const reviewes = props.rev;
    const oneDigit = Math.floor(Math.random() * 10);


    return (
        <div>

            <div className='feelHold relative'>
            <img src={feel} className="feelImg" />
            </div>

            <p className='revLine1 text-gray-300'> _____________________________________________________________________________________________________________________________________________________________________________________      </p>

            <div className='starHold2 flex gap-5 justify-center flex-row fof'>
                <p className="text-gray-500 text-4xl font-semibold revSize"> {starCalc}.{oneDigit} </p>
                {starCalc === 1 ? <div className='flex fs30 starLine'>  <AiFillStar /> </div> : ""}
                {starCalc === 2 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 3 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 4 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                {starCalc === 5 ? <div className='flex fs30 starLine'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />  </div> : ""}
                <p className='starLine2'> {reviewes} Reviews </p>
            </div>

        </div>
    )
}

export default Review1