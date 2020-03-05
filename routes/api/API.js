//copied a lot of API info from a previous project.  Will need to translate from mysql to mongoose
var db = require("../models");
var passport = require("../config/passport");
module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user)
    });

    app.post("/api/user/", function(req, res) {
        db.User.create(req.body)
            .then(function(user) {
                res.json(user);
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        req.session.destroy
        res.redirect('/');

    });
   // GET ROUTES
app.get("/api/user/", function(req, res) {
    db.User.find({id: req.user.id}).then(function(dbUsers) {
        res.json(dbUsers);
    });
});
app.get("/api/get_user_by_id/:id", function(req, res) {
    db.User.find({id: req.params.id}).then(function(dbUsers) {
        res.json(dbUsers);
    });
})
app.get("/api/get_logs/", function(req, res) {
    db.Log.find({}).then(function(dbLogs) {
        res.json(dbLogs);
    });
});
app.get("/api/get_logs_by_id/:id", function(req, res) {
    db.Log.find({}).then(function(dbLogs) {
        res.json(dbLogs);
    });
});
app.post("/api/new_student", function(req, res) {
    var log = req.body;
    log.tutor_user_id = req.user.id;
    log.tutor_name = req.user.first_name + " " + req.user.last_name;
    db.Log.create(log).then(function(dbLogs) {
        res.json(dbLogs);
    });
});
app.post("/api/new_log", function(req, res) {
    var log = req.body;
    log.tutor_user_id = req.user.id;
    log.tutor_name = req.user.first_name + " " + req.user.last_name;
    db.Log.create(log).then(function(dbLogs) {
        res.json(dbLogs);
    });
});
app.put("/api/update_password/", function(req, res) {
    db.User.findOneAndUpdate({email: req.body.email, password: { $exists: false}}, {password: req.body.password})
    .then(function() {
        res.redirect(307, "/api/login");
    })
    .catch(function(err) {
        res.status(401).json(err);
    });
})
app.put("/api/update_user/", function(req, res) {
    let updateUser = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        role: req.body.role,
        school: req.body.school
    }
    db.User.findOneAndUpdate({id: req.body.id}, updateUser).then(function(result) {
        return res.json(result);
    });
})
}