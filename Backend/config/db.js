import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://shubhanshushukla1975:hppZOvbWvefJ3Tnc@ecommerce.hdutin9.mongodb.net/ecommerce"
    );
    console.log(
      `Connected to MongoDB Database ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
