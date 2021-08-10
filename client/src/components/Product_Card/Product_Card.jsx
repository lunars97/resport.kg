import React from "react";
import classes from "./Product_Card.module.scss";
import dress from "../assets/images/yellowDress.png";
const ProductCard = () => {
    return (
        <>
            <h1>Все товары</h1>
            <div className={classes.main_card_wrap} id={"products"}>
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
                    <button className={classes.btn}>
                        Заказать{" "}
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                    </button>
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
                    <button className={classes.btn}>
                        {" "}
                        Заказать{" "}
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                    </button>
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
                    <button className={classes.btn}>
                        {" "}
                        Заказать{" "}
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                    </button>
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
                    <button className={classes.btn}>
                        {" "}
                        Заказать{" "}
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                    </button>
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
                    <button className={classes.btn}>
                        Order{" "}
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
