const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Caonnected: ${conn.connection.host}`);

    }

    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
