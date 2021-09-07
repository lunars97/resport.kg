import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/products";
import classes from "./TopSales.module.scss";
import Carousel from "react-elastic-carousel";
const TopSales = () => {
    const { products, product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(products));
    }, []);
    const recommendedProducts = products.filter(
        ({ _id }) => _id !== product._id
    );
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];
    return (
        <>
            <h1>Похожие товары</h1>
            <div className={classes.main}>
                <div className={classes.main_card_wrap}>
                    <Carousel
                        focusOnSelect={true}
                        itemsToShow={5}
                        pagination={false}
                        breakPoints={breakPoints}
                        enableAutoPlay
                        autoPlaySpeed={2500}
                        showArrows={false}
                    >
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
                                                    .splice(0, 3)
                                                    .join(" ")}
                                            </span>
                                            <p>
                                                {description
                                                    .split(" ")
                                                    .splice(0, 10)
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
                    </Carousel>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default TopSales;
