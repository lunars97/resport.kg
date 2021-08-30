import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/products";
import Slider from "react-slick";
import classes from "./TopSales.module.scss";
const TopSales = () => {
    const { products, product } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    // const history = useHistory();
    useEffect(() => {
        dispatch(getProducts(products));
    }, []);
    const recommendedProducts = products.filter(
        ({ _id }) => _id !== product._id
    );
    // const openProduct = (_id) => history.push(`/products/${_id}`);
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4500,
        autoplaySpeed: 4500,
        cssEase: "linear",
        dots: true,
        swipeToSlide: true,
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
        <div className={classes.main_card_wrap}>
            <h1>Похожие товары</h1>
            <Slider {...settings}>
                {recommendedProducts.map(
                    ({ selectedFiles, title, size, price, _id }) => (
                        <Link to={`/products/${_id}`}>
                            <div className={classes.inner_card} key={_id}>
                                <div className={classes.inner_card__img_frame}>
                                    <img src={selectedFiles} alt={title} />
                                </div>
                                <div className={classes.price_box}>
                                    <span className={classes.currentPrice}>
                                        {price}
                                    </span>
                                </div>
                                <div className={classes.product_description}>
                                    <div className={classes.description_text}>
                                        <span>{title}</span>
                                    </div>

                                    <div className={classes.size_description}>
                                        <span>{size}</span>
                                    </div>
                                </div>
                                <button className={classes.btn}>
                                    {" "}
                                    Заказать{" "}
                                    <i
                                        className="fa fa-shopping-cart"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </Link>
                    )
                )}
            </Slider>
        </div>
    );
};

export default TopSales;
