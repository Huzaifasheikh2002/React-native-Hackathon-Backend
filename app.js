const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/authroutes")
const adminrouter = require("./routes/adminroutes")
const requestrouter = require("./routes/requestroutes")

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URI = `mongodb+srv://HuzaifaNadeem:mongodbdatabasemongo@cluster0.ggf3o7k.mongodb.net/test`
mongoose.connect(BASE_URI).then((res)=>console.log("Connenct")).catch((err)=>console.log(err))


app.use(express.json())
app.use(cors())
app.use("/api",router);
app.use("/api/admin",adminrouter);
app.use("/api/request",requestrouter);

app.get("/api/huzaifa",(req,res)=>{
    res.send("Huzaifa")
})

app.listen(PORT, () =>
  console.log(`server  running on http://localhost:${PORT}`)
);