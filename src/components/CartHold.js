import React from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';
import CartPageFaq from './CartPageFaq';
import CartPageFooter from './CartPageFooter';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import MobileNav from './MobileNav';
import SPFooter from './SPFooter';
import YouMayAlsoLike from './YouMayAlsoLike';
import "../styles/BestSellers.css";

const CartHold = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartLen = cartItems.length;

    const totalPrice = cartItems.map(item => {
        return item.quantity * item.price;
    }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);


    return (
        <div>
            <MobileNav />
            {/*<p className=' font-bold text-2xl fof'>CART TOAL ${totalPrice} </p>*/}
            {cartLen === 0 ? <EmptyCart /> : <>
                <div className=' flex flex-row relative gap-40 urCartItem'>
                    <p className=' text-2xl'> Your Cart </p>
                    <p className=' font-semibold fof lin text-xl'> {cartLen} items </p>
                </div>




                <div className='chParent'>
                    {cartItems.map((item) => (

                        <div className=''>

                            <Cart
                                key={item.id}
                                item={{
                                    id: item.id,
                                    title: item.name,
                                    quantity: item.quantity,
                                    total: item.totalPrice,
                                    price: item.price,
                                    image: item.picture,
                                    cartLength: cartItems.length,
                                }}
                            />
                        </div>
                    ))}
                </div>

                <CartTotal totalPr={totalPrice} />


                <p className=' alsoLikeText relative fof text-4xl italic mb-10'> YOU MAY ALSO LIKE </p>
                <YouMayAlsoLike className="" />
                <CartPageFaq />

                <CartPageFooter />
            </>}





        </div>
    )
}

export default CartHold