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
  
 module.exports = mongoose.model("products", productSchema);