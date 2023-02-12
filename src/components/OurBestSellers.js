import React from 'react'
import { store } from '../productsStore/Store'
import "../styles/OurBestSellers.css"
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux-state/CartState'

import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


const OurBestSellers = (props) => {

    const { title, price, id, image } = props;

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

    const toast = useToast();




    return (
        <div>
            <div key={id}>

                <div className="card w-96 bg-base-100 shadow-xl zoom">

                    <Link to={`/${id}`}>
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>

                    </Link>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-1 font-bold text-xl">{title}</h2>
                        <h2 className=" text-xl mb-2 fof">${price}</h2>


                        <div className="card-actions" onClick={() =>
                            toast({
                                title: '',
                                description: "Successfully Added",
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                            })
                        }>
                            <button className="btn btn-primary" onClick={addItemToCartHandler}>Buy Now</button>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default OurBestSellers
