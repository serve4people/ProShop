import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import {notFound,errHandler} from "./middleware/errorMiddleware.js"
dotenv.config();

connectDB();
const app = express();

app.get('/',(req,res) => {
    res.send("Api is running....")
})
app.use('/api/products',productRoutes)

app.use(notFound)
app.use(errHandler);
const PORT = process.env.Port || 5000
app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
