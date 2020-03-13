const router = require("express").Router();
const db = require("../../models")

router.route("/allLogs")
    .post((req, res) => {
        console.log(req.body)
        db.Log.find({ student: req.body.id })
            .then(results => {
                console.log(results)
                res.json(results)
            }).catch(err => {
                console.log(err, "err on 18 in daylog")
            });
    });

router.route("/:id/:date")
    .get((req, res) => {

        db.Log.findOne({ student: req.params.id, date: req.params.date })
            .then(results => {
                // console.log(results, "Made it to line 8");
                res.json(results);
            }).catch(err => {
                console.log(err, "err on 10 in daylog");
            });
    });

router.route("/")
    .post((req, res) => {

        // console.log(req.body.scores.time, "--------------------------")
        let log = {
            time: req.body.scores.time,
            date: req.body.date,
            student: req.body.student,
            scores: [req.body.scores]
        }

        db.Log.findOne({ date: log.date, student: log.student })
            .then(results => {

                if (results) {
                    db.Log.findOne({ _id: results._id, "scores.time": log.time })
                        .then(findDayLogResults => {
                            // console.log(logUpdateRes, "Line 53 - dayLog")
                            if (findDayLogResults) {
                                console.log("line 55", log.scores)
                                db.Log.findOneAndUpdate({ _id: results._id, "scores.time": log.time }, { "$set": { "scores.$.score": log.scores[0].score } }, { new: true })
                                    .then(logUpdateRes => { 
                                        console.log(logUpdateRes, "line 56"); 
                                        res.json(logUpdateRes) 
                                    });
                            } else {
                                db.Log.findOneAndUpdate({ _id: results._id }, { $push: { scores: log.scores } })
                                    .then(results => {
                                        // console.log("Line 53 ", results)
                                        res.json(results);
                                    }).catch(err => {
                                        console.log(err);
                                    });
                            }
                        });
                } else {
                    db.Log.create(req.body)
                        .then(results => {
                            // console.log(results, "( dayLog == line : 57 )");
                            res.json(results)
                        }).catch(err => { 
                            onsole.log(err);
                        });
                }
            }).catch(err => {
                console.log(err)
            });
    });

module.exports = router;