import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    selectedFiles: String,
    article: String,
    color: String,
    size: String,
    newPrice: String,
    oldPrice: String,
    description: String,
    manufactured: String,
    category: String,
});
var AddProduct = mongoose.model("AddProduct", postSchema);
export default AddProduct;
