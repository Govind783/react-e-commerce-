import React from 'react';
import "../styles/JournalPage.css"
import hair from "../assets/hair.jpeg";
import better from "../assets/better.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import JournalPageFooter from './JournalPageFooter';

const JournalPage = () => {
  return (<div className='journalPageMainParent-1'>
    <div className='journalPageMainParent'>
      <p className='sjText'> THE SUKIN JOURNAL </p>

      <div className='paraHold absolute'>
        <p className='text-center'> Discover the world of natural through our eyes! From skincare tips,
          lifestyle and environmental hacks to inspirational interviews!
          Explore it all.
        </p>
      </div>

      <p className='fof text-3xl font-medium text-center absolute aprilBlogHeading'> April Blog: Protective Haircare Styles and Tips </p>

      <div className='hairImgHold'>
        <img src={hair} className="hairImg" alt='hey' />
      </div>

      <div className='jhold flex flex-col absolute'>

        <p> We recently launched our new Deep Cleanse Hair Care regimen which is all about cleansing your hair deeply to remove years of build up from harsh products, pollutants, dirt and oils. To achieve luscious locks, cleansing your scalp is a step you won’t want to miss! Deep Cleanse is formulated with Apple Cider Vinegar, Australian River Mint and sustainably-sourced Algae to purify your scalp and leave your hair healthy and refreshed!
          Using natural products and maintain a healthy scalp are both great steps you can take towards achieving your hair goals, but there is even more you can be doing to prevent damage and protect your hair long term.
        </p>


        <p>     <li className='text-left mb-3 fof text-xl '> AVOID HEATING TOOLS </li>  Have you been using hot styling products like straighteners or curlers to style your hair? Uh oh… this can lead to dry, damaged, and brittle hair. When your hair is exposed to high heat, that can change the shape of your hair’s keratin strands. Temperatures over 300-degree Fahrenheit, convert your ⍺-keratin to β-keratin, which eventually leads to weaker hair that has lost its elasticity and become more prone to damage. Try utilizing braids or plastic curlers to create waves and curls in your hair

          Tip:  Embrace your natural beauty and show off your hair without styling!!

        </p>



        <p>   <li className='text-left mb-3 fof text-xl '> SCALP HEALTH + STYLING </li>  Like many of us, you may be focusing more on your scalp health to improve the look of your hair. For this you’ll likely be applying your hair serum, which tends to make your hair looking slightly greasy. A great way to conceal this is by putting your hair into a slicked back bun.

          Step 1: After applying your serum, you can part hair down the middle and separate the front sections of your hair on either side.

          Step 2: Gather the rest of your hair and brush into a ponytail. After securing your hair tie, twist your hair into a knotted bun and pin.

          Step 3: Then brush your front pieces into the bun, leaving the part in the middle.

          Tip: You can complete the look by applying hair spray or gel to lock in this look. </p>



        <p>   <li className='text-left mb-3 fof text-xl '> YOUR PILLOWCASE </li> If your pillowcase hasn’t been changed in a month, its time to do so!! Or treat yourself, and upgrade your cotton pillowcase to a silk one. By switching to a silky smooth pillowcase, you can help prevent split ends and frizz! Good Housekeeping Institute Textile Lab tested this overnight miracle and now they swear by silk pillowcases, with one saying, “I realize my cheap pillowcase was the real culprit behind my bad hair days.”*

        </p>

      </div>



      <div className='footerFeatures3 flex flex-row absolute'>
        <FaShippingFast className=' w-24 h-20 widthHeight' />
        <FaLock className='w-14 h-16 widthHeight' />
        <BsCurrencyDollar className='w-24 h-20 widthHeight' />
        <img src={better} className="w-20 widthHeight" alt='hey' />
      </div>

      <div className='footerFeatures3TextHold fof flex flex-row absolute uppercase'>
        <p> 2 DAY DELIVERY </p>
        <p> secure checkout </p>
        <p> royalty points </p>
        <p> easy returns </p>
      </div>

      <div className='jfHold absolute'>
        <JournalPageFooter />
      </div>


    </div>
  </div>
  )
}

export default JournalPage