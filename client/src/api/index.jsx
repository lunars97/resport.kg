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

export const fetchProduct = (id) => API.get(`/admin/${id}`);
export const fetchProducts = (page) => API.get(`/admin`);
export const fetchProductsBySearch = (searchQuery) =>
    axios.get(`/products/search?searchQuery=${searchQuery.search || "none"}`);
export const createProduct = (newProduct) => API.post(`/admin`, newProduct);

export const updateProduct = (id, updatedProduct) =>
    API.patch(`/admin/${id}`, updatedProduct);
export const deleteProduct = (id) => {
    API.delete(`/admin/${id}`);
};

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
