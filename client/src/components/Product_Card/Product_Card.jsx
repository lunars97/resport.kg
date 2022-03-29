import React, { useEffect } from "react";
import classes from "./Product_Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, getProduct } from "../../actions/products";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductCard = () => {
    const { products, product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getProducts(products));
        dispatch(getProduct(product));
    }, []);
    // const recommendedProducts = products.filter(
    //     ({ _id }) => _id !== product._id
    // );

    return (
        <div>
            <h1>All Products</h1>
            <div className={classes.main_card_wrap} id={"products"}>
                {products?.map((product) => (
                    <div key={product._id} className={classes.inner_card}>
                        <div className={classes.inner_card__img_frame}>
                            <img
                                src={product.selectedFile}
                                alt={product.title}
                            />
                        </div>
                        <div className={classes.price_box}>
                            <span className={classes.currentPrice}>
                                {product.price} som
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
                                        .splice(0, 10)
                                        .join(" ")}
                                    ...
                                </p>
                            </div>

                            <div className={classes.size_description}>
                                <span>size: {product.size}</span>
                            </div>
                        </div>
                        <div className={classes.btn_wrapper}>
                            <Link to={`products/${product._id}`}>
                                <button className={classes.btn}>Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
