import React, { useEffect } from "react";
import Slider from "react-slick";
import dress from "../../assets/images/yellowDress.png";
import classes from "./ProductDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProduct } from "../../actions/products";
const ProductDetail = () => {
    const { product } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const { id } = useParams();
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
    useEffect(() => {
        dispatch(getProduct(id));
    }, [id]);

    if (!product) return null;
    // const recommendedProducts = products.filter(
    //     ({ _id }) => _id !== products._id
    // );

    return (
        <div className={classes.detail_wrapper}>
            <div className={classes.detail_wrapper__inner}>
                <Slider {...settings}>
                    <div className={classes.img_wrapper}>
                        <div className={classes.main_img_container}>
                            <img
                                src={product.selectedFiles}
                                alt={product.title}
                            />
                        </div>
                        <div className={classes.small_img_wrapper}>
                            <div className={classes.small_img_container}>
                                <img
                                    src={product.selectedFiles}
                                    alt={product.title}
                                />
                            </div>
                            <div className={classes.small_img_container}>
                                <img
                                    src={product.selectedFiles}
                                    alt={product.title}
                                />
                            </div>
                            <div className={classes.small_img_container}>
                                <img
                                    src={product.selectedFiles}
                                    alt={product.title}
                                />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className={classes.description}>
                    <div className={classes.description__inner}>
                        <span>{product.title}</span>
                        <div
                            className={
                                classes.description__inner__first_section
                            }
                        >
                            <p>артикул: {product.article}</p>
                            <p className={classes.category}>
                                категория товара: {product.category}
                            </p>
                        </div>
                        <div className={classes.description__inner_info}>
                            <div className={classes.description__inner__colors}>
                                <div
                                    style={{ backgroundColor: product.color }}
                                ></div>
                            </div>
                            <div
                                className={
                                    classes.description__inner_info__size
                                }
                            >
                                <p>размер: {product.size}</p>
                            </div>
                        </div>
                        <span>Описание товара</span>
                        <p className={classes.description_text}>
                            {product.description}
                        </p>
                        <p className={classes.manufactured}>
                            Cтрана производитель: {product.manufactured}
                        </p>
                        <p className={classes.manufactured}>
                            Cостав: {product.makeup}
                        </p>
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
