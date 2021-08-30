import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    article: String,
    color: String,
    size: String,
    price: String,
    makeup: String,
    description: String,
    manufactured: String,
    category: String,
});
var AddProduct = mongoose.model("AddProduct", postSchema);
export default AddProduct;
