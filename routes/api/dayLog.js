const router = require("express").Router();
const db = require("../../models")

const fakeLog = {
    scores: [{
        time: "800",
        score: 5
    }],
    comment: "This is only for test purposes"
}

router.route('/')
    .get((req, res) => {
        db.Log.findOne({ date: "2020-03-05T18:14:43" } )
            .then(results => {
                console.log(results, "Made it to line 8");
            }).catch(err => {
                console.log(err, "err on 10 in daylog")
            })

        // db.Log.create(fakeLog).then(response => {
        //     console.log(response, "response for the fake create");
        // })
    })

    module.exports = router;