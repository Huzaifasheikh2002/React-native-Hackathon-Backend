const express = require("express")
const router = express.Router();
const requestController = require("../controllers/requestController")

router.post("/send",requestController.request)
router.get("/get",requestController.getrequest)


module.exports = router;