import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/products";
import { Link, useLocation } from "react-router-dom";
import classes from "../PageBtn/PageBtn.module.scss";
import { Pagination, PaginationItem } from "@material-ui/lab";
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const AdminPage = () => {
    const { numberOfPages } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get("page") || 1;
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
                    to={`/admin?page=${item.page}`}
                />
            )}
        />
    );
};

export default AdminPage;
