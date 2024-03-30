// Schema for product
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
   email: {
      type: String,
      required: true,
    },
  
    age: {
      type: Boolean,
      required: true,
    },
  
    mobile: {
      type: String,
      required: true,
    },
  } , {timestamps:true});
  
 module.exports = mongoose.model("users",userSchema);