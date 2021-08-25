import express from "express";

import AddProduct from "../models/addProduct.js";

const router = express.Router();

export const getProducts = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 12;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await AddProduct.countDocuments({});
        const products = await AddProduct.find()
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);

        res.json({
            data: products,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getProductsBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");
        const price = new RegExp(searchQuery, "i");
        const color = new RegExp(searchQuery, "i");
        const category = new RegExp(searchQuery, "i");
        const products = await AddProduct.find({
            $or: [{ title, price, color, category }],
        });

        res.json({ data: products });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await AddProduct.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    const product = req.body;
    const newAddProduct = new AddProduct({ ...product });

    try {
        await newAddProduct.save();
        res.status(201).json(newAddProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        selectedFiles,
        title,
        article,
        color,
        size,
        price,
        makeup,
        description,
        manufactured,
    } = req.body;

    const updatedProduct = {
        selectedFiles,
        title,
        article,
        color,
        size,
        price,
        makeup,
        description,
        manufactured,
        _id: id,
    };

    await AddProduct.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updateProduct);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    await AddProduct.findByIdAndRemove(id);

    res.json({ message: "Товар успешно удален" });
};

export default router;
