import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    newPrice: String,
    oldPrice: String,
    description: String,
});
var AddProduct = mongoose.model("AddProduct", postSchema);
export default AddProduct;
