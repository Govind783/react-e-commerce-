import React from 'react'
import "../styles/Navbar.css";
import logo from "../assets/cara.png";
import { useState } from 'react';
import BestSellers from './BestSellers';
import GiftSets from './GiftSets';
import Body from './Body';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);


    const showHandler = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)

    }

    const showHandler2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
        setShow4(false)

    }

    const showHandler3 = () => {
        setShow3(true)
        setShow(false)
        setShow2(false)
        setShow4(false)
    }

    const showHandler4 = () => {
        setShow4(true)
        setShow(false)
        setShow2(false)
        setShow3(false)

    }


    const dontShowHandler = () => {
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)


    }

    return (
        <div>


            <header class="banner" role="banner">

                <nav class="navbar" role="navigation" aria-label="menu">

                    <Link to="/">
                        <img src={logo} className=" ml-32" />
                    </Link>

                    <ul class="menuNav">
                        <li class="dropdown nav-link nav-link-fade-up transition-all duration-700" onMouseOver={showHandler} >
                            BEST SELLERS
                            {show && <div>
                                <ul class="dropdown-nav" onMouseLeave={dontShowHandler} >

                                    <BestSellers > </BestSellers>

                                </ul>

                            </div>}

                        </li >


                        <li class="dropdown nav-link nav-link-fade-up" onMouseOver={showHandler2} >
                            GIFT SETS
                            {show2 && <ul class="dropdown-nav dropdown-nav2" onMouseLeave={dontShowHandler}>
                                <GiftSets />
                            </ul>}

                        </li>


                        <li class="dropdown nav-link nav-link-fade-up" onMouseOver={showHandler3} >
                            SHOP RANGE
                            {show3 && <ul class="dropdown-nav dropdown-nav3" onMouseLeave={dontShowHandler}>
                                <Body />
                            </ul>}

                        </li>


                        <p className='navLine absolute bg-red-600 w-1 font-extralight h-9 z-50'>  </p>

                    </ul>

                    <Link to="/cart">
                        <FaShoppingBag className=' text-2xl text-right ml-10 relative left-24' />
                    </Link>
                </nav >
            </header >



        </div >
    )
}

export default NavBar







/*    



          


















             <div class="container">
                <div class="dropdown" onMouseOver={showHandler}>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content" onMouseLeave={dontShowHandler}>
                     {show && <BestSellers /> }
                    </div>
                </div>

                <div class="dropdown" onMouseOver={showHandler2}>
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content" onMouseLeave={dontShowHandler}>
                    {show2 && <GiftSets /> }
                    </div>
                </div>


                <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                        Link 1
                        Link 2
                        Link 3
                    </div>
                </div>


                <a href="#news">Link</a>
            </div>

            <h3>Dropdown Menu inside a Navigation Bar</h3>
            <p>Hover over the "Dropdown" link to see the dropdown menu.</p>













*/

