
const router = require("express").Router();
const db = require("../../models")

router.route("/")
    .post((req, res) => {
        console.log("here")
        db.Users.create(req.body)
        .then(function() {
            res.redirect(307, "/api/login");
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    });
    module.exports = router;
