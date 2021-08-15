import express from "express";
import mongoose from "mongoose";

import AddProduct from "../models/addProduct";

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
        const newPrice = new RegExp(searchQuery, "i");
        const color = new RegExp(searchQuery, "i");
        const products = await AddProduct.find({
            $or: [{ title, newPrice, color }],
        });

        res.json({ data: products });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
