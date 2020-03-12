const router = require("express").Router();
const db = require("../../models")


// const fakeLog = {
//     id: "5e61419386ec903dfc396b97",
//     scores: [{
//         time: "815",
//         score: 5
//     }],
//     comment: "This is only for test purposes"
// }
router.route("/allLogs")
    .get((req, res) => {
        db.Log.find({ student: req.body.id })
            .then(results => {
                res.json(results)
            }).catch(err => {
                console.log(err, "err on 18 in daylog")
            })
        })

        
router.route("/:id/:date")
    .get((req, res) => {

        db.Log.findOne({ student: req.params.id, date: req.params.date })
            .then(results => {
                // console.log(results, "Made it to line 8");
                res.json(results)
            }).catch(err => {
                console.log(err, "err on 10 in daylog")
            })

        // db.Log.find({ "scores._id" :"5e61419386ec903dfc396b98" }).then(results => {
        //     console.log(results[0].scores)
        //     res.json(results);
        // })

        // db.Log.create(fakeLog).then(response => {
        //     console.log(response, "response for the fake create");
        // })

        // db.Log.findOneAndUpdate({ _id: fakeLog.id }, { $push: { scores: fakeLog.scores } })
        // .then(results => {
        //     console.log("Just Reference", results)
        //     res.json(results);
        // })
    })
router.route("/")
    .post((req, res) => {
        console.log(req.body.scores.time, "--------------------------")
        let log = {
            time: req.body.scores.time,
            date: req.body.date,
            student: req.body.student,
            scores: [req.body.scores]
        }

        db.Log.findOne({ date: log.date, student: log.student }).then(results => {

            if (results) {
                db.Log.findOne({ _id: results._id, "scores.time": log.time }).then(findDayLogResults => {
                    // console.log(logUpdateRes, "Line 53 - dayLog")

                    if (findDayLogResults) {
                        console.log("line 55", log.scores)                    
                        db.Log.findOneAndUpdate({ _id: results._id, "scores.time": log.time }, {"$set": { "scores.$.score": log.scores[0].score}}, {new: true}).then(logUpdateRes => { console.log(logUpdateRes, "line 56"); res.json(logUpdateRes) })
                    }else{
                        db.Log.findOneAndUpdate({ _id: results._id }, { $push: { scores: log.scores } })
                            .then(results => {
                                // console.log("Line 53 ", results)
                                res.json(results);
                            }).catch(err => {
                                console.log(err)
                            })
                    }
                })

            } else {
                db.Log.create(req.body).then(results => {
                    // console.log(results, "( dayLog == line : 57 )");
                    res.json(results)
                }).catch(err => { console.log(err) })
            }
        }).catch(err => { console.log(err) })
    })

module.exports = router;