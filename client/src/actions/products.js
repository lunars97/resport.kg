import {
    FETCH_ALL,
    FETCH_PRODUCT,
    FETCH_BY_SEARCH,
    CREATE,
    DELETE,
    UPDATE,
    START_LOADING,
    END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index";

export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchProduct(id);
        dispatch({
            type: FETCH_PRODUCT,
            payload: {
                product: data,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProducts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {
            data: { data, currentPage, numberOfPages },
        } = await api.fetchProducts(page);
        dispatch({
            type: FETCH_ALL,
            payload: {
                data,
                currentPage,
                numberOfPages,
            },
        });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getProductsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {
            data: { data },
        } = await api.fetchProductsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createProduct = (product, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createProduct(product);
        dispatch({ type: CREATE, payload: data });
        // history.getProductsBySearch(`/products/${data._id}`);
    } catch (error) {
        console.log(error);
    }
};
export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};
