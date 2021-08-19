import axios from "axios";
const API = axios.create({
    baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchProducts = (page) => API.get(`/products?page=${page}`);
export const fetchProductsBySearch = (searchQuery) =>
    API.get(`/products/search?searchQuery=${searchQuery.search || "none"}`);
export const createProduct = (newProduct) =>
    API.post("/products", "/admin", newProduct);

export const updateProduct = (id, updatedProduct) =>
    API.patch(`/admin/products/${id}, updatedProduct`);
export const deleteProduct = (id) => {
    API.delete(`/admin/products/${id}`);
};

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
