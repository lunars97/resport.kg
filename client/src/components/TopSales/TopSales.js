import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/products";
import Slider from "react-slick";
import classes from "./TopSales.module.scss";
const TopSales = () => {
    const { products, product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(products));
    }, []);
    const recommendedProducts = products.filter(
        ({ _id }) => _id !== product._id
    );
    const settings = {
        dots: false,

        infinite: false,

        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <h1>Похожие товары</h1>
            <div className={classes.main}>
                <div className={classes.main_card_wrap}>
                    <Slider {...settings}>
                        {/* <div className={classes.slider_wrapper}> */}
                        {recommendedProducts.map(
                            ({
                                selectedFile,
                                title,
                                description,
                                size,
                                price,
                                _id,
                            }) => (
                                <div className={classes.inner_card} key={_id}>
                                    <div
                                        className={
                                            classes.inner_card__img_frame
                                        }
                                    >
                                        <img
                                            src={selectedFile[0]}
                                            alt={title}
                                        />
                                    </div>
                                    <div className={classes.price_box}>
                                        <span className={classes.currentPrice}>
                                            {price} сом
                                        </span>
                                    </div>
                                    <div
                                        className={classes.product_description}
                                    >
                                        <div
                                            className={classes.description_text}
                                        >
                                            <span>
                                                {title
                                                    .split(" ")
                                                    .splice(0, 4)
                                                    .join(" ")}
                                            </span>
                                            <p>
                                                {description
                                                    .split(" ")
                                                    .splice(0, 20)
                                                    .join(" ")}
                                                ...
                                            </p>
                                        </div>

                                        <div
                                            className={classes.size_description}
                                        >
                                            <span>размер: {size}</span>
                                        </div>
                                    </div>
                                    <div className={classes.btn_wrap}>
                                        <Link to={`/products/${_id}`}>
                                            <button className={classes.btn}>
                                                {" "}
                                                Детали{" "}
                                                <i
                                                    className="fa fa-shopping-cart"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        )}
                        {/* </div> */}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TopSales;
