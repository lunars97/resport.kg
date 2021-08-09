import React from "react";
import Slider from "react-slick";
import classes from "./TopSales.module.scss";
import dress from "../assets/images/yellowDress.png";
const TopSales = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4500,
        autoplaySpeed: 4500,
        cssEase: "linear",
        dots: true,
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
        <div className={classes.main_card_wrap}>
            <Slider {...settings}>
                <div className={classes.inner_card}>
                    <div className={classes.inner_card__img_frame}>
                        <img src={dress} alt="card_image" />
                    </div>
                    <div className={classes.price_box}>
                        <span className={classes.prevPrice}>12000 c.</span>
                        <span className={classes.currentPrice}>12000 c.</span>
                        <span className={classes.discount}>35%</span>
                    </div>
                    <div className={classes.product_description}>
                        <div className={classes.description_text}>
                            <span>The Organic Cotton Clothes</span>
                        </div>

                        <div className={classes.size_description}>
                            <span>Размер 46-54</span>
                        </div>
                    </div>
                    <button className={classes.btn}>Order</button>
                </div>
                <div className={classes.inner_card}>
                    <div className={classes.inner_card__img_frame}>
                        <img src={dress} alt="card_image" />
                    </div>
                    <div className={classes.price_box}>
                        <span className={classes.prevPrice}>12000 c.</span>
                        <span className={classes.currentPrice}>12000 c.</span>
                        <span className={classes.discount}>35%</span>
                    </div>
                    <div className={classes.product_description}>
                        <div className={classes.description_text}>
                            <span>The Organic Cotton Clothes</span>
                        </div>

                        <div className={classes.size_description}>
                            <span>Размер 46-54</span>
                        </div>
                    </div>
                    <button className={classes.btn}>Order</button>
                </div>
                <div className={classes.inner_card}>
                    <div className={classes.inner_card__img_frame}>
                        <img src={dress} alt="card_image" />
                    </div>
                    <div className={classes.price_box}>
                        <span className={classes.prevPrice}>12000 c.</span>
                        <span className={classes.currentPrice}>12000 c.</span>
                        <span className={classes.discount}>35%</span>
                    </div>
                    <div className={classes.product_description}>
                        <div className={classes.description_text}>
                            <span>The Organic Cotton Clothes</span>
                        </div>

                        <div className={classes.size_description}>
                            <span>Размер 46-54</span>
                        </div>
                    </div>
                    <button className={classes.btn}>Order</button>
                </div>
                <div className={classes.inner_card}>
                    <div className={classes.inner_card__img_frame}>
                        <img src={dress} alt="card_image" />
                    </div>
                    <div className={classes.price_box}>
                        <span className={classes.prevPrice}>12000 c.</span>
                        <span className={classes.currentPrice}>12000 c.</span>
                        <span className={classes.discount}>35%</span>
                    </div>
                    <div className={classes.product_description}>
                        <div className={classes.description_text}>
                            <span>The Organic Cotton Clothes</span>
                        </div>

                        <div className={classes.size_description}>
                            <span>Размер 46-54</span>
                        </div>
                    </div>
                    <button className={classes.btn}>Order</button>
                </div>
                <div className={classes.inner_card}>
                    <div className={classes.inner_card__img_frame}>
                        <img src={dress} alt="card_image" />
                    </div>
                    <div className={classes.price_box}>
                        <span className={classes.prevPrice}>12000 c.</span>
                        <span className={classes.currentPrice}>12000 c.</span>
                        <span className={classes.discount}>35%</span>
                    </div>
                    <div className={classes.product_description}>
                        <div className={classes.description_text}>
                            <span>The Organic Cotton Clothes</span>
                        </div>

                        <div className={classes.size_description}>
                            <span>Размер 46-54</span>
                        </div>
                    </div>
                    <button className={classes.btn}>Order</button>
                </div>
            </Slider>
        </div>
    );
};

export default TopSales;
