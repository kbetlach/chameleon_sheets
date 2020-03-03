const mongoose = require("mngoose");
const db = require("../models");
// const data = require("data");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/webpackplugin",
    { useNewUrlParser: true, 
    useFIndAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});



db  deletemany({})
.then(() =