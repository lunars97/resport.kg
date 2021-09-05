import axios from "axios";
const API = axios.create({
    baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const fetchProduct = (id) =>
    API.get(`/admin/${id}` && `/products/${id}`);
export const fetchProducts = (page) =>
    API.get(`/admin?page=${page}` && `/products?page=${page}`);
export const fetchProductsBySearch = (searchQuery) =>
    API.get(`products/search?searchQuery=${searchQuery.search || "none"}`);
export const createProduct = (newProduct) =>
    API.post(`/admin` && "/products", newProduct);
export const updateProduct = (id, updatedProduct) =>
    API.patch(`/admin/${id}`, updatedProduct);
export const deleteProduct = (id) => {
    API.delete(`/admin/${id}`);
};

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
