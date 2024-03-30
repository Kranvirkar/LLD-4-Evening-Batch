const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./Routes/productRoutes");
// DB Connection
mongoose
  .connect(
    "mongodb+srv://mrinalbhattacharya:jrybX27vUUhJTnXs@cluster0.qkdrsui.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 8006;

app.use(express.urlencoded());
app.use(express.json());

// use Routes

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});
