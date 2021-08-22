import React from "react";
import classes from "../BodySection/BodySection.module.scss";
import { TopSales, ProductCard } from "../index";
import { PageBtn } from "../abstracts";
import Delivery from "../Delivery/Delivery";
import HeroSection from "../HeroSection/HeroSection";
const BodySection = () => {
    return (
        <>
            <HeroSection />
            <div className={classes.components_wrapper}>
                <TopSales />
                <ProductCard />
                {/* <PageBtn /> */}
                <Delivery />
            </div>
        </>
    );
};

export default BodySection;
