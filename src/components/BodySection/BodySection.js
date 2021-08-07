import React from "react";
import classes from "../BodySection/BodySection.module.scss";
import TopSales from "../TopSales/TopSales";
const BodySection = () => {
    return (
        <>
            <TopSales />
            <div className={classes.main_cart_wrap}>
                <div className={classes.inner_cart}>
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
                </div>
            </div>
        </>
    );
};

export default BodySection;
