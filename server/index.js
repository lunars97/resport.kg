import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import userRoute from "./routes/user.js";
dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/products", productRoutes);
app.use("/admin", productRoutes);
app.use("/user", userRoute);

app.get("/", (req, res) => {
    res.send("App is running");
});
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));
mongoose.set("useFindAndModify", false);
