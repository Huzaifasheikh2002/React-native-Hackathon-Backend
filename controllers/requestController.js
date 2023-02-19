const requestModel = require("../Models/requestSchema")


exports.request = async(req,res)=>{
    console.log(req.body)
    const { department, level } = req.body;
    if(!department || !level){
        res.status(400).json({ message: "Required Fields are Missing!!!" })
        return
    }
    const objToSend = {
        department:department,
        level:level
    }
    requestModel.create(objToSend,(err, data) => {
        if (err) {
            res.status(500).json({
                message: "Something Went Wrong!!!"
            })
        }
        else {
            res.status(200).json({
                message: "Request Send Successfully!!!",
                data: data
            })
        }
    })
}
exports.getrequest = async(req,res)=>{
    requestModel.find({},(err,requests)=>{
        if(err){
            res.status(500).json({
                message:"Something Went Wrong!!!"
            })
        }
        else{
            res.json({
                requests
            })
        }
    })
}