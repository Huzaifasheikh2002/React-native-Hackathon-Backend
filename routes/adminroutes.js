const express = require("express")
const router = express.Router();
const admin = require('../controllers/adminController')

router.post("/login",admin.login)
router.post("/signup",admin.signup)



module.exports = router;
