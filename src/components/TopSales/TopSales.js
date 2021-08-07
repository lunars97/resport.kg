import React from "react";
import Slider from "react-slick";
import classes from "./TopSales.module.scss";
import topSales_img from "../assets/images/yellowDress.png";
const TopSales = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={classes.main_wrapper}>
            <div className={classes.main_wrapper__inner}>
                <Slider {...settings}>
                    <div className={classes.main_wrapper__inner__slider_card}>
                        <img src={topSales_img} alt="dress" />
                    </div>
                    <div className={classes.main_wrapper__inner__slider_card}>
                        <img src={topSales_img} alt="dress" />
                    </div>
                    <div className={classes.main_wrapper__inner__slider_card}>
                        <img src={topSales_img} alt="dress" />
                    </div>
                    <div className={classes.main_wrapper__inner__slider_card}>
                        <img src={topSales_img} alt="dress" />
                    </div>
                    <div className={classes.main_wrapper__inner__slider_card}>
                        <img src={topSales_img} alt="dress" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default TopSales;
