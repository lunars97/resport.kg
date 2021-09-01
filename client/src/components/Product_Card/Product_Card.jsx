import React, { useEffect } from "react";
import classes from "./Product_Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getProduct } from "../../actions/products";
import { Link } from "react-router-dom";
const ProductCard = () => {
    const { products, product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts(products));
        dispatch(getProduct(product));
    }, []);

    return (
        <div>
            <h1>Все товары</h1>
            <div className={classes.main_card_wrap} id={"products"}>
                {products?.map((product) => (
                    <div key={product._id} className={classes.inner_card}>
                        <div className={classes.inner_card__img_frame}>
                            <img
                                src={product.selectedFile[0]}
                                alt={product.title}
                            />
                        </div>
                        <div className={classes.price_box}>
                            <span className={classes.currentPrice}>
                                {product.price} сом
                            </span>
                        </div>
                        <div className={classes.product_description}>
                            <div className={classes.description_text}>
                                <span>
                                    {product.title
                                        .split(" ")
                                        .splice(0, 4)
                                        .join(" ")}
                                </span>
                                <p>
                                    {product.description
                                        .split(" ")
                                        .splice(0, 20)
                                        .join(" ")}
                                    ...
                                </p>
                            </div>

                            <div className={classes.size_description}>
                                <span>размер: {product.size}</span>
                            </div>
                        </div>
                        <div className={classes.btn_wrapper}>
                            <Link to={`products/${product._id}`}>
                                <button className={classes.btn}>
                                    Детали товара
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
