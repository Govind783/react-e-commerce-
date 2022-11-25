import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FREQUENTLY ASKED QUESTION",
    rowContentTextSize: "10px",
    rows: [
        {
            title: "HOW LONG WILL MY ORDER TAKE TO ARRIVE?",
            content: `We give you the option to use USPS or UPS at checkout. 

            USPS: Priority (2-4 business days depending on location) Priority Express (1-3 business days depending on location).
            
            UPS:
            Ground (4-8 business days depending on location) 3-Day Select (3 business days) 2nd Day Air (2 business days) Next Day Air Saver (1 business day) Next Day Air (1 business day) Next Day Air Early AM (1 business day) 
            
            Please note this does not apply to weekend orders as well as peak sale periods and peak holiday seasons. Orders may be delayed by up to 48 hours during these periods. 
            
            Delivery timeframes can vary over the public holiday periods due to overwhelming demand on postal services. Please expect delays on estimated delivery times and customer service response from delivery providers. Thank you for your consideration.`,
        },


        {
            title: "HOW MUCH IS POSTAGE?",
            content:
                "Postage is calculated at checkout based on your delivery address and preferred method of delivery. We offer free shipping on all orders over $50.",
        },

        {
            title: "CAN I HAVE MY ORDER EXPRESS POSTED?",
            content: ` Yes, we offer a Priority Express option through USPS at our check-out. Please note that selecting this Express Post option does not guarantee next day delivery.`,
        },

        {
            title: "DO YOU SHIP INTERNATIONALLY?",
            content: `We offer shipping of online purchases to U.S. only at this time. At this time we do not ship outside the United States due to additional taxes and fees imposed by customs. We have other Sukin websites that ship to Australia, New Zealand, Asia, United Kingdom, Europe & Canada.`,
        },

        {
            title: "WHAT HAPPENS IF MY PACKAGE GOES MISSING? ",
            content: `Unfortunately, we can not change any order information once your order has been processed. Please ensure the correct post codes are entered and if you are in an office building, please add your company name to avoid your package being sent back to us.  `,
        },

        {
            title: "WHAT HAPPENS IF I ENTERED THE WRONG DELIVERY INFORMATION?",
            content: `If your package has been 'stuck in transit' for longer than expected please let us know so we can lodge a 'missing package investigation' with postal service. `,
        },

    
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    position:"relative",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
     animate: true,
    // arrowIcon: "V",
    // tabFocus: true

    expandIcon: "+",
    collapseIcon: "-",
    transitionDuration: "1s",
};

export default function CartPageFaq(){

    return (
        <div className="faqParent fof text-4xl relative">
            <Faq
                data={data}
                styles={styles}
                config={config}
                className="relative"
            />
        </div>
    );
}