const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    id:{
        type:Number,
        require:true
    }
})

const productModel = mongoose.model("user", userSchema);
module.exports = productModel;