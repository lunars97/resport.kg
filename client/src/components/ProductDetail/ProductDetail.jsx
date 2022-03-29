import React, { useEffect, useState } from "react";

import classes from "./ProductDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/products";
import TopSales from "../TopSales/TopSales";
import ModalWindow from "../abstracts/ModalWindow/ModalWindow";
const ProductDetail = () => {
    const [modal, setModal] = useState(false);
    const { products, product } = useSelector((state) => state.products);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(id));
    }, [id]);

    if (!product) return null;

    const recommendedProducts = products.filter(
        ({ _id }) => _id !== product._id
    );

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.detail_wrapper}>
                <div className={classes.detail_wrapper__inner}>
                    <div className={classes.img_wrapper}>
                        <div className={classes.main_img_container}>
                            <img
                                src={product.selectedFile}
                                alt={product.title}
                            />
                        </div>
                        {/* <div className={classes.small_img_wrapper}>
                                <div className={classes.small_img_container}>
                                    <img
                                        src={product.selectedFile[0]}
                                        alt={product.title}
                                    />
                                </div>
                                <div className={classes.small_img_container}>
                                    <img
                                        src={product.selectedFile[0]}
                                        alt={product.title}
                                    />
                                </div>
                                <div className={classes.small_img_container}>
                                    <img
                                        src={product.selectedFile[0]}
                                        alt={product.title}
                                    />
                                </div>
                            </div> */}
                    </div>

                    <div className={classes.description}>
                        <div className={classes.description__inner}>
                            <span>{product.title}</span>
                            <div
                                className={
                                    classes.description__inner__first_section
                                }
                            >
                                <p>bar code: {product.article}</p>
                                <p className={classes.category}>
                                    category: {product.category}
                                </p>
                            </div>
                            <div className={classes.description__inner_info}>
                                <div
                                    className={
                                        classes.description__inner__colors
                                    }
                                >
                                    <div
                                        style={{
                                            backgroundColor: product.color,
                                        }}
                                    ></div>
                                </div>
                                <div
                                    className={
                                        classes.description__inner_info__size
                                    }
                                >
                                    <p>size: {product.size}</p>
                                </div>
                            </div>
                            <span>Description</span>
                            <div className={classes.main_desc_wrap}>
                                <div className={classes.description_box}>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <p className={classes.manufactured}>
                                Manufacturer: {product.manufactured}
                            </p>
                            <p className={classes.manufactured}>
                                Composition: {product.makeup}
                            </p>
                            <div>
                                <button
                                    className={classes.btn}
                                    onClick={() => setModal((prev) => !prev)}
                                >
                                    Order{" "}
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
            <div className={classes.slider_wrapper}>
                {!!recommendedProducts.length && <TopSales />}
            </div>
            <ModalWindow modal={modal} setModal={setModal} />
        </div>
    );
};

export default ProductDetail;
