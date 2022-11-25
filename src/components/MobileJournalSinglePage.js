import React from 'react'
import { Link } from 'react-router-dom'

const MobileJournalSinglePage = () => {
    return (
        <div>
            <div className='jsMainParent mt-28' id='mjspJournal'>

                <div className='jsLeft'>
                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Sukin_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992' alt='hey' className=' w-72' />
                    <p className=' mt-8'> Discover the world of natural through our <br />
                        eyes! From skincare tips, lifestyle and <br />
                        environmental hacks to inspirational<br />
                        interviews! Explore it all.</p>

                    <Link to={`/journal/april`}>
                        <button className='readBtn '> READ THE JOURNAL </button>
                    </Link>
                </div>

                <div className='jsRight flex flex-row gap-24'>

                    <Link to={`/journal/april`}>
                        <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/400x400_blog_540x.jpg?v=1652511342' alt='hey' className='jsImg rounded-xl' />
                    </Link>

                    <img src='https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/BBQ_1200x440_7b63676b-f505-4b21-9192-e1b43a53be32_540x.jpg?v=1625596357' alt='hey' className='jsImg rounded-xl' />


                </div>

                <div className='jsRightText flex flex-row gap-36 relative font-bold'>
                    <p> APRIL BLOG: PROTECTIVE HAIRCARE <br />  STYLE AND TIPS </p>
                    <p> SUKINS GUIDE TO A BACKYARD BBQ</p>


                </div>
            </div>
        </div>
    )
}

export default MobileJournalSinglePage