import React from "react";
import classes from "../BodySection/BodySection.module.scss";
import { ProductCard, HeroSection, Delivery } from "../index";
import { PageBtn } from "../abstracts";

const BodySection = () => {
    return (
        <>
            <HeroSection />
            <div className={classes.components_wrapper}>
                <ProductCard />
                {/* <PageBtn /> */}
                <Delivery />
            </div>
        </>
    );
};

export default BodySection;
