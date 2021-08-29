import React from "react";
import classes from "../BodySection/BodySection.module.scss";
import { ProductCard, HeroSection, Delivery } from "../index";
import { PageBtn } from "../abstracts";
import { useLocation } from "react-router-dom";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const BodySection = () => {
    const query = useQuery();
    const page = query.get("page") || 1;
    return (
        <>
            <HeroSection />
            <div className={classes.components_wrapper}>
                <ProductCard />
                <PageBtn page={page} />
                <Delivery />
            </div>
        </>
    );
};

export default BodySection;
