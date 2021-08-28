import express from "express";

import {
    getProducts,
    getProduct,
    getProductsBySearch,
    createProduct,
    deleteProduct,
    updateProduct,
} from "../controllers/products.js";

import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/search", getProductsBySearch);

router.post("/", auth, createProduct);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
