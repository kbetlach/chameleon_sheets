
const router = require("express").Router();
const db = require("../../models")
var passport = require("../../config/passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
    console.log("logging in")
    res.json(req.user)
});

router.post("/", function(req, res) {
    db.User.create(req.body)
        .then(function(user) {
            res.json(user);
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
});

// Route for logging user out
router.get("/logout", function(req, res) {
    req.logout();
    req.session.destroy
    res.redirect('/');

});
// GET ROUTES
router.get("/", function(req, res) {
    db.User.find({}).then(function(dbUsers) {
        res.json(dbUsers);
    });
});
router.get("/self", function(req, res) {
    db.User.findOne({_id: req.user._id}).then(function(dbUsers) {
        console.log(dbUsers);
        res.json(dbUsers);
    });
})

router.get("/teacher", function(req, res) {
    db.User.find({role: "Teacher"}).then(function(dbUsers) {
        res.json(dbUsers);
    });
})
router.get("/guardian", function(req, res) {
    db.User.find({role: "Guardian"}).then(function(dbUsers) {
        res.json(dbUsers);
    });
})
router.get("/:id", function(req, res) {
    db.User.findOne({_id: req.params.id}).then(function(dbUsers) {
        res.json(dbUsers);
    });
})
router.put("/update_password", function(req, res) {

    var email =  req.body.email;
    var password =  req.body.password;

    db.User.findOne({email:email, password: { $exists: false}})
    .then(function(dbUser) {
        encryptedPassword = dbUser.encryptPassword(password)

        db.User.findOneAndUpdate({email: email}, {password: encryptedPassword})
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(function(err) {
            res.status(401).json(err);
        });

    })
    .catch(function(err) {
        res.status(401).json(err);
    });
})
// router.put("/encrypt_password", function(req, res) {
//     db.User.findOneAndUpdate({email: req.body.email}, {password: req.body.password})
//     .then(function() {
//         res.redirect(307, "/api/user/login");
//     })
//     .catch(function(err) {
//         res.status(401).json(err);
//     });
// })
router.put("/", function(req, res) {
    let updateUser = {
        id: req.body._id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        role: req.body.role,
        school: req.body.school
    }
    db.User.findOneAndUpdate({_id: req.body.id}, updateUser).then(function(result) {
        return res.json(result);
    });
})
router.post("/delete", function(req, res) {
    console.log(req.body);
    db.User.deleteOne({_id: req.body.id}).then(function(result) {
        return res.json(result);
    });
})
    module.exports = router;
