const express = require("express");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const products = require("./MOCK_DATA.json");

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

// Schema for product

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },

  isInStock: {
    type: Boolean,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
} , {timestamps:true});

const ProductModel = mongoose.model("products", productSchema);

const PORT = 8006;

app.use(express.urlencoded());
app.use(express.json());

// Routing

app.get("/", (req, res) => {
  res.send("Welcome to the our Shop");
});

// hybrid Api development
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/products", async (req, res) => {
  const allProducts = await ProductModel.find({})
  console.log(allProducts)
  const html = `<ul> ${allProducts.map(
    (product) => `<li>${product.product_name} </li>`
  )}  </ul>
    `;

  return res.send(html);
});

// Route parameters

app.get("/api/products/:id", async (req, res) => {
    const product = await ProductModel.findById(req.params.id)

    return res.status(200).json({productInfo : product})
});

// Post Put Delete

// Post Method

// create a DB Entry

app.post("/api/products", async (req, res) => {
   const body = req.body

    const product = await ProductModel.create({
      product_name : body.product_name,
      product_price : body.product_price,
      isInStock : body.isInStock,
      category : body.category
    })

    console.log(product)

    return res.status(201).json({message : 'Product Created'})


});

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});

// put

app.put("/api/products/:id", async (req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id , req.body)
    return res.status(201).json({message : 'Resources Updated'})
});

//Delete

app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id)
  return res.status(201).json({message : 'Resource Deleted'})
});
