import React from 'react'
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useEffect } from 'react';
import CartAdditonalFeatures from './CartAdditonalFeatures';
import CartPageFaq from './CartPageFaq';
import Features2 from './Features2';
import { useSelector } from 'react-redux';

const CartTotal = (props) => {

    let finapPr = props.totalPr + 20 + 15;

    let cartItems = useSelector((state) => state.cart.items);

    let cartLen = cartItems.length;


    return (
        <div className='cartTotalMainParent '>
            <div className='flex flex-row gap-36 font-semibold text-2xl mt-8 mobTextSize gap6rem'>
                <p className=' ml-14'> SUBTOTAL </p>
                <p> ${Math.round(props.totalPr)} </p>
            </div>

            <div className='headingHold mobTextSize2 mt-10 fof flex flex-col gap-12 relative ml-16 mr-4 font-medium text-xl'>
                <p> SHIPPING </p>
                <p> INCL, TAX  </p>
            </div>

            <div className='calcHold mobTextSize relative fof flex flex-col gap-12 font-medium text-xl'>
                <p> $20 </p>
                <p> $15 </p>
            </div>

            <div className=' relative totLine'>
                <p className=' text-gray-300'> ________________________________________________________ </p>
            </div>

            <div className='ctActualToatal fof text-xl font-medium relative'>
                <p> TOATL  ${Math.round(props.totalPr + 20 + 15)}</p>
            </div>

            <div className=' relative totLine2'>
                <p className=' text-gray-300'> ________________________________________________________ </p>
            </div>



            <div className='gpayBtnHold flex justify-center'>


                <GooglePayButton className='gpayHold' environment='TEST' paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                            },

                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "example",
                                    gatewayMerchantId: "exampleGatewayMerchantId",


                                },
                            },

                        },
                    ],
                    merchantInfo: {
                        merchantId: "17613812255336763067",
                        merchantName: "Demo Only"
                    },

                    transactionInfo: {

                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: "Total",
                        totalPrice: "500",
                        currencyCode: "USD",
                        countryCode: "US",
                    },
                }}
                    onLoadPaymentData={paymentData => {
                        console.log(paymentData.paymentMethodData);
                    }}

                />
            </div>

            <div className='paypalHold'>
                <PayPalScriptProvider>
                    <PayPalButtons aria-label='BUY WITH PAYPAL' createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "100",
                                    },
                                },
                            ],
                        });
                    }}>

                    </PayPalButtons>
                </PayPalScriptProvider>
            </div>

            {cartLen > 1 ? <div className='mobDisappear'>

                <p className='relative fof text-2xl text-center top-9'> SECURELY CHCECKOUT WITH </p>

                <CartAdditonalFeatures />

                {cartLen > 2 ? <Features2 /> : ""}

            </div>
                :
                ""
            }

        </div>
    )
}

export default CartTotal

