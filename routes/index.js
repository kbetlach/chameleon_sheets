const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")

//API Routes

router.use("/api", apiRoutes);

//This is returning an error in the terminal. The path doesn't exist.
//Commented until fixed.
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;