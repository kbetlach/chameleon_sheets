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

router.route('/')
    .get((req, res) => {
        // db.Log.findOne({ date: "2020-03-05T18:14:43" } )
        //     .then(results => {
        //         console.log(results, "Made it to line 8");
        //     }).catch(err => {
        //         console.log(err, "err on 10 in daylog")
        //     })

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

    .post((req, res) => {
    console.log(req.body.scores)
        let log = {
            date: req.body.date,
            student: req.body.student,
            scores: [req.body.scores]
        }
        db.Log.findOne({ date: log.date, student: log.student }).then(results => {
            if (results) {
                db.Log.findOneAndUpdate({ _id: results._id }, { $push: { scores: log.scores } })
                    .then(results => {
                        // console.log("Line 53 ", results)
                        res.json(results);
                    })
            } else {
                db.Log.create(req.body).then(results =>{
                    
                    // console.log(results, "( dayLog == line : 57 )");
                    res.json(results)

                })
            }
        })
    })

module.exports = router;