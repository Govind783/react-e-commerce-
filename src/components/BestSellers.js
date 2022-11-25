import React from 'react'
import { store } from '../productsStore/Store'
import "../styles/BestSellers.css";
import HoverImage from 'react-hover-image/build';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  return (
    <div className='bestSellerMainParent flex flex-row'>
      {store.map((item) => {
        if (item.type == "bestSeller")
          return (
            <Link to={`/${item.id}`} key={item.id}>  
            <div key={item.id} className="bestSellerIndivitualItem">
              <HoverImage src={item.primaryImage} hoverSrc={item.hoverImg}   className="bestSellerImage rounded-xl mb-6"/>
              <p className='bestSellerName text-center mb-2'> {item.name} </p>
              <p className=' font-normal text-center'> ${item.price} </p>
            </div>
            </Link>
          )
      })}

    </div>
  )
}

export default BestSellers;
