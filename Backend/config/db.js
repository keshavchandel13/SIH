const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URL || `mongodb://localhost:27017/`;
        if (!mongoUri) {
            throw new Error("MONGO_URL is missing in .env file");
        }

        await mongoose.connect(mongoUri, {
            dbName: "sihdb",
        });

        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
