import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    selectedFiles: [String],
    article: String,
    color: String,
    size: String,
    newPrice: String,
    oldPrice: String,
    description: String,
    manufactured: String,
    category: String,
});
var Sales = mongoose.model("Sales", postSchema);
export default Sales;
