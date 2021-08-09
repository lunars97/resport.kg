import React from "react";
import classes from "../BodySection/BodySection.module.scss";
import { TopSales, ProductCard } from "../index";
import { PageBtn } from "../abstracts";
const BodySection = () => {
    return (
        <div className={classes.components_wrapper}>
            <TopSales />
            <ProductCard />
            <PageBtn />
        </div>
    );
};

export default BodySection;
