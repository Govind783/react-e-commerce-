import React from 'react'
import "../styles/GiftSets.css";
import { store } from '../productsStore/Store';
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';
const GiftSets = () => {
    return (
        <div className='giftSetMainParent'>

            <p className='categoryText font-bold'> CATEGORY </p>

            <div className='flex flex-col gap-8 bestSellerPriceHolder'>

                <Link to={"/under20"} >
                    <p className="hover:underline"> Under $20 </p>
                </Link>

                <Link to={"/under40"} >
                    <p className="hover:underline"> Under $40 </p>
                </Link>

                <Link to={"/forher"} >
                    <p className="hover:underline"> For Her </p>
                </Link>

                <Link to={"/forhim"} >
                    <p className="hover:underline"> For Him </p>
                </Link>

            </div>

            <div className='flex fle-row gap-20 giftHold'>

                {store.map((item) => {
                    if (item.type == "gift")
                        return (
                            <Link to={`/${item.id}`} key={item.id}>

                                <div key={item.id} className="giftIndivitual">
                                    <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg} className="GiftImage w-48 rounded-lg mb-6" />
                                    <p className='giftName text-center text-md mb-2'> {item.name} </p>
                                    <p className='giftPrice font-normal text-center' >${item.price} </p>
                                </div>
                            </Link>
                        )
                })}



            </div>
        </div>
    )
}
export default GiftSets