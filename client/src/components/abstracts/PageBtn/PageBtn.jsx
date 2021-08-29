import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/products";
import { Link } from "react-router-dom";
import classes from "./PageBtn.module.scss";
import { Pagination, PaginationItem } from "@material-ui/lab";
const PageBtn = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) {
            dispatch(getProducts(page));
        }
    }, [page, dispatch]);
    return (
        <Pagination
            className={classes.btn_container}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            renderItem={(item) => (
                <PaginationItem
                    {...item}
                    component={Link}
                    to={`/products?page=${item.page}`}
                />
            )}
        />
    );
};

export default PageBtn;
