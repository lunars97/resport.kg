import React, { useEffect } from "react";
import classes from "./Product_Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, getProducts } from "../../actions/products";
import { useHistory } from "react-router-dom";
const ProductCard = () => {
    const { products, product } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getProducts(products));
        dispatch(getProduct(product));
    }, []);
    const openProduct = (e) => {
        history.push(`/products/${product._id}`);
    };
    return (
        <>
            <h1>Все товары</h1>
            {products?.map((product) => (
                <div
                    className={classes.main_card_wrap}
                    id={"products"}
                    key={product._id}
                >
                    <div className={classes.inner_card} onClick={openProduct}>
                        <div className={classes.inner_card__img_frame}>
                            <img
                                src={product.selectedFile}
                                alt={product.title}
                            />
                        </div>
                        <div className={classes.price_box}>
                            <span className={classes.currentPrice}>
                                {product.price}
                            </span>
                        </div>
                        <div className={classes.product_description}>
                            <div className={classes.description_text}>
                                <span>{product.title}</span>
                            </div>

                            <div className={classes.size_description}>
                                <span>{product.size}</span>
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
                </div>
            ))}
        </>
    );
};

export default ProductCard;
