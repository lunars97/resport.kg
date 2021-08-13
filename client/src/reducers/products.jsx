import {
    FETCH_ALL,
    FETCH_BY_SEARCH,
    CREATE,
    UPDATE,
    DELETE,
    START_LOADING,
    END_LOADING,
} from "../constants/actionTypes";

const productReducer = (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                products: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, products: action.payload.data };
        case CREATE:
            return { ...state, products: [...state.products, action.payload] };
        case UPDATE:
            return {
                ...state,
                products: state.products.map((products) =>
                    products._id === action.payload._id
                        ? action.payload
                        : products
                ),
            };
        case DELETE:
            return {
                ...state,
                products: state.products.filter(
                    (products) => products._id !== action.payload
                ),
            };
        default:
            return state;
    }
};
export default productReducer;
