const express = require("express");
const router = express.Router();
const { MyUser } = require("../controller/user.controller");

router.get("/user", MyUser);

module.exports = router;