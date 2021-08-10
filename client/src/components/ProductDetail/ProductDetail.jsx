import React from "react";
import Slider from "react-slick";
import dress from "../assets/images/yellowDress.png";
import classes from "./ProductDetail.module.scss";
const ProductDetail = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a href="/">
                    <img className={classes.img} src={dress} alt="dress" />
                </a>
            );
        },
        dots: true,
        fade: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={classes.detail_wrapper}>
            <div className={classes.detail_wrapper__inner}>
                <Slider {...settings}>
                    <div className={classes.img_wrapper}>
                        <div className={classes.main_img_container}>
                            <img src={dress} alt="dress" />
                        </div>
                        <div className={classes.small_img_wrapper}>
                            <div className={classes.small_img_container}>
                                <img src={dress} alt="dress" />
                            </div>
                            <div className={classes.small_img_container}>
                                <img src={dress} alt="dress" />
                            </div>
                            <div className={classes.small_img_container}>
                                <img src={dress} alt="dress" />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className={classes.description}>
                    <div className={classes.description__inner}>
                        <span>Описание товара</span>
                        <div
                            className={
                                classes.description__inner__first_section
                            }
                        >
                            <p>артикул: 122345AA</p>
                            <p>категория товара: женская одежда</p>
                        </div>
                        <div className={classes.description__inner__colors}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
