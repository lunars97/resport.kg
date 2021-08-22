import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    password: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("User", userSchema);
