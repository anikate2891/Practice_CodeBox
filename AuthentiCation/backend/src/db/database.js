import mongoose from "mongoose";
import { config } from "../config/config.js";

function connectDB() {
    try {
        mongoose.connect(config.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error Connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;