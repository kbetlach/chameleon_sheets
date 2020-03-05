const router = require("express").Router();
const userRoute = require("./user");
const studentRoute = require("./student");
const dayLogRoute = require("./dayLog")
const emailRoute = require('./email')
// Api Routes

router.use("/email", emailRoute);
router.use("/user", userRoute);
router.use("/student", studentRoute);
// router.use("/dayLog", dayLogRoute);
module.exports = router;

