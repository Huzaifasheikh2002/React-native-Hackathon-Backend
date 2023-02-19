const mongoose = require("mongoose");
const requestSchema = mongoose.Schema({
    department:{
        type:String,
        required: true 
    },
    level:{
        type:Number,
    }

})

const requestModel = mongoose.model("request", requestSchema);
module.exports = requestModel