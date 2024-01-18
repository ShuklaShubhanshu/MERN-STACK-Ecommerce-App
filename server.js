import express from "express";
const app = express();
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./Backend/config/db.js";
import categoryRoutes from "./Backend/routes/categoryRoutes.js";
import productRoutes from "./Backend/routes/productRoutes.js";
import authRoutes from "./Backend/routes/authRoute.js";
// import { cors } from "cors";

//configure env
dotenv.config();

//database config
connectDB();

// middlewares
// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce App a Mern Stack Project");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listening to port number... ${PORT}`.bgCyan.white);
});
