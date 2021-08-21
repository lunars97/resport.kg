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
    }, [dispatch, page]);
    return (
        <div
            className={classes.btn_container}
            count={numberOfPages}
            page={Number(page) || 1}
        >
            <Pagination
                count={numberOfPages}
                page={Number(page) || 1}
                variant="outlined"
                color="primary"
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        component={Link}
                        to={`/admin?page=${item.page}`}
                    />
                )}
            />
        </div>
    );
};

export default PageBtn;
