import express from "express";

import {
    getProducts,
    getProduct,
    getProductsBySearch,
    createProduct,
    deleteProduct,
    updateProduct,
} from "../controllers/products.js";

// import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/detail:id", getProduct);
router.get("/search", getProductsBySearch);

router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
