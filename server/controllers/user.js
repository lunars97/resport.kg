import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModal from "../models/user.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const logedUser = await UserModal.findOne({ email });
        if (!logedUser)
            return res.status(404).json({
                message: "Такого пользователя не существует",
            });
        const isPasswordCorrect = await bcrypt.compare(
            password,
            logedUser.password
        );
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Неправильный пароль" });

        const token = jwt.sign(
            { email: logedUser.email, id: logedUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "500d" }
        );

        res.status(200).json({ result: logedUser, token });
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так" });
    }
};

export const signup = async (req, res) => {};
