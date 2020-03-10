const router = require("express").Router();
const db = require("../../models")


router.route("/new")
    .post((req, res) => {

        let student = {
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            hours: req.body.hours,
            startTime: req.body.startTime,
            recordedBy: req.body.user
        }
        console.log(req.user, "req.user -- line 17");
        db.Student.create(student).then(newStudent =>{
            res.json(newStudent);
        });
    });

router.route("/all")
    .get((req, res) => {
        db.Student.find({}).then(results => {
            // console.log(results)
            res.json(results)
        })
    });

router.get("/:id", function(req, res) {
    db.Student.find({_id: req.params.id}).then(result => {
        res.json(result);
    });
})

router.route("/teacherAddStudent")
.post((req, res) => {
  
    console.log(req.body, req.user._id, "here")
    res.json("yes")
    // db.User.findOneAndUpdate({_id: req.user._id}, {students: req.body.userStudents})
    // .then(results=> {
    //     console.log(results)
    //     res.json(results);
    // })
})

module.exports = router;