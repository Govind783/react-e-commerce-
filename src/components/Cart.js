import React from 'react'
import { useSelector } from 'react-redux'
import { cartActions } from '../redux-state/CartState'
import { useDispatch } from 'react-redux'
import cartgif from "../assets/cartGif.gif";
import qty from "../assets/qty.png"

import { MdAdd } from "react-icons/md";
//import { GrFormSubtract } from "react-icons/gr"
import { RiSubtractFill } from "react-icons/ri"
import YouMayAlsoLike from './YouMayAlsoLike';
import SPFooter from './SPFooter';
import { Link } from 'react-router-dom';


const Cart = (props) => {

  const { title, quantity, price, id, image, total, cartLength } = props.item;



  const cartList = useSelector((state) => state.cart.items);



  const dispacth = useDispatch();


  const totalPrice = cartList.map(item => {
    return item.quantity * item.price;
  }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);




  const removeItemFromCartHandler = () => {
    dispacth(cartActions.removeItemFromCart(id))
  }

  const addItemToCartHandler = () => {
    dispacth(
      cartActions.addItemToCart({
        id,
        price,
        title,
        image,
      })
    )
  }


  return (
    <div >


      {/*<p> items in your cart {cartLength}  </p>*/}

      <div className=' flex cartProductsHold flex-col relative top-44 fof'>

        <div className='cartImaegHold relative flex flex-col w-72'>

          <Link to={`/${id}`}>
            <img src={image} className=" relative  fof w-44 rounded-lg cartImg" />
          </Link>

        </div>

        <p className=' font-semibold relative text-xl cartName fof w-56 whitespace-nowrap'> {title} </p>
        <p className=' relative w-24 cartPrice text-xl'>${price} </p>

        <div className='middleLine relative text-gray-200'>
          ___________________________________________________________</div>


        <div className=' flex bg-black text-white flex-column gap-8 relative qtyhChangehold border bor w-40 hei rounded-md'>
          <div className=' flex flex-row gap-7'>
            <RiSubtractFill className=' text-3xl text-white relative cursor-pointer ml-2 mt-2' onClick={removeItemFromCartHandler} />
            <p className='fof relative text-2xl mt-2'> {quantity} </p>
            <MdAdd className=' text-3xl relative  cursor-pointer mt-2' onClick={addItemToCartHandler} />
          </div>
        </div>


      </div>

      <div className='topLine absolute text-gray-200'>
        ______________________________________________________________________________
      </div>








    </div>


  )
}

export default Cart

