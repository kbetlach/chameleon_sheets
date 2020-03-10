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
        }).catch(err => {console.log(err)})
    });

router.route("/all")
    .get((req, res) => {
        db.Student.find({}).then(results => {
            // console.log(results)
            res.json(results)
        })
    });

router.route("/byID")
.get((req, res) => {
    if(req.body.id){
            db.Student.find({_id: req.body.id}).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err)
    })
    }else{
        res.end();
    }

})

router.route("/teacherAddStudent")
.post((req, res) => {
  
    console.log(req.body, req.user._id, "here")
    db.User.findOneAndUpdate({_id: req.user._id}, {$push: {students: req.body.userStudents}})
    .then(results=> {
        console.log(results)
        res.json(results);
    }).catch(err => {console.log(err)})
});


router.route("/getUserStudents")
.get((req, res) => {
    console.log(req.user._id, "hhhhhhhhhhhhhhhhhhhhh");
    db.User.findOne({_id: req.user._id})
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => { console.log(err, "This errrrrrrrrr") }
        );
    });


module.exports = router;