const userModel = require("../Models/userSchema")

exports.signup = async(req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    if (!name || !email || !password) {
        res.status(400).json({
            message: "Required Fields are Missing!!",
        })
        return
    }
    const objToSend = {
        name,
        email,
        password: password
    }
    userModel.findOne({email}, (err, user) => {
        console.log(email, "email")
        if (err) {
            res.status(500).json({
                message: "Something Went Wrong!!!"
            })
        }
        else {
            if (user) {
                res.status(400).json({
                    message: "E-mail Already Exist!!!"
                })
            }
            else {
                userModel.create(objToSend, (err, data) => {
                    if (err) {
                        res.status(500).json({
                            message: "Something Went Wrong!!!"
                        })
                    }
                    else {
                        res.status(200).json({
                            message: "User Created Successfully!!!",
                            data: data
                        })
                    }
                })
            }
        }
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Required Fields are Missing!!!" })
        return
    }
    userModel.findOne({email},async(err,user)=>{
        if(err){
            res.status(500).json({
                message:"Something Went Wrong!!!"
            })
        }
        else{
            if(user){
                if(password==user.password){
                    res.status(200).json({
                        message:"Login Success!!!",
                        data:user,
                    })
                }
                else{
                    res.status(400).json({
                        message:"Credential Error!!!"
                    })
                }
            }
            else{
                res.status(400).json({message:"E-mail Does Not Exist"})
            }
        }
    })
}