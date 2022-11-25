import React, { Component } from "react";
import Slider from "react-slick";
import { store } from "../productsStore/Store";
import { Link } from "react-router-dom";

export default class AutoPlayMethods extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <div className="youMay">
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {store.map((item) => {
                        if (item.type == "ourBestSellers") {
                            return (<div key={item.id}>
                                <Link to={`/${item.id}`}>
                                    <img src={item.primaryImage} className=" w-48 spCaroImg brForMobile rounded-xl  mb-8" />
                                </Link>
                            </div>)
                        }
                    })}
                </Slider>

            </div>
        );
    }
}



