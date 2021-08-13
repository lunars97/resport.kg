import React from "react";
import Slider from "react-slick";
import dress from "../../assets/images/yellowDress.png";
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
                        <span>Название товара</span>
                        <div
                            className={
                                classes.description__inner__first_section
                            }
                        >
                            <p>артикул: 122345AA</p>
                            <p className={classes.category}>
                                категория товара: женская одежда
                            </p>
                        </div>
                        <div className={classes.description__inner_info}>
                            <div className={classes.description__inner__colors}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div
                                className={
                                    classes.description__inner_info__size
                                }
                            >
                                <p>размер: s,m,l,xl</p>
                            </div>
                        </div>
                        <span>Описание товара</span>
                        <p className={classes.description_text}>
                            Комплекты снова в моде. В этом сезоне мы
                            представляем уютный спортивный костюм Loungewear
                            Women's Tracksuit. Верх с круглым вырезом горловины
                            и карманом-кенгуру отлично сочетается со штанами в
                            тон. Свободный крой, мягкий материал и
                            высококлассный вышитый брендинг – несомненные
                            преимущества модели, в составе материала которой
                            присутствует премиальный, экологичный хлопок от BCI.
                        </p>
                        <p className={classes.manufactured}>
                            Cтрана производитель: Китай
                        </p>
                        <p className={classes.manufactured}>Cостав: Китай</p>
                        <div>
                            <button className={classes.btn}>
                                Заказать{" "}
                                <i
                                    className="fa fa-shopping-cart"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
