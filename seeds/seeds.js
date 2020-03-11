const mongoose = require("mongoose");
const db = require("../models");
// const data = require("data");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/webpackplugin", {
    useNewUrlParser: true,
    useFIndAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// STUDENTS
let studentSeed = [
    {
        name: [
            {
                firstName: "Phil",
                lastName: "Pipes"
            }
        ]
    },
    {
        hours: 6
    },
    {
        startTime: "0800"
    },
    {
        name: [
            {
                firstName: "Pete",
                lastName: "Zah"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Brad",
                lastName: "Gibson"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Shirley",
                lastName: "Waterford"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Joanne",
                lastName: "Johnson"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Francisco",
                lastName: "Perez"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "John",
                lastName: "Rivers"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Joseph",
                lastName: "Olson"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Nicole",
                lastName: "Price"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Phil",
                lastName: "Pipes"
            }
        ]
    }, {
        hours: 6
    }, {
        startTime: "0800"
    }, {
        name: [
            {
                firstName: "Chris",
                lastName: "Gaines"
            }
        ]
    }, {
        hours: 3
    }, {
        startTime: "1100"
    }, {
        name: [
            {
                firstName: "Jordan",
                lastName: "Foley"
            }
        ]
    }, {
        hours: 4
    }, {
        startTime: "1000"
    }, {
        name: [
            {
                firstName: "Meera",
                lastName: "Aguilar"
            }
        ]
    }, {
        hours: 5
    }, {
        startTime: "0900"
    }, {
        name: [
            {
                firstName: "Drew",
                lastName: "Myers"
            }
        ]
    }, {
        hours: 5
    }, {
        startTime: "0900"
    }, {
        name: [
            {
                firstName: "Chelsea",
                lastName: "Rowland"
            }
        ]
    }, {
        hours: 4
    }, {
        startTime: "1000"
    },
]

// ADMIN AND TEACHERS
let userSeed = [
    //ADMIN ACCOUNT
    {
        role: "Admin"
    },
    {
        email: "adam@oakschool.com"
    },
    {
        password: "adam"
    },
    {
        first_name: "Adam"
    }, 
    {
        last_name: "Strater"
    }, 
    {
        school: "Oak School"
    },
    //TEACHERS
    {
        role: "Teacher"
    },
    {
        email: "riley@oakschool.com"
    },
    {
        password: "riley"
    },
    {
        first_name: "Riley"
    }, 
    {
        last_name: "O'Ryan"
    }, 
    {
        school: "Oak School"
    },
    {
        role: "Teacher"
    },
    {
        email: "cheyenne@oakschool.com"
    },
    {
        password: "cheyenne"
    },
    {
        first_name: "Cheyenne"
    }, 
    {
        last_name: "Nolan"
    }, 
    {
        school: "Oak School"
    },
    {
        role: "Teacher"
    },
    {
        email: "herbert@oakschool.com"
    },
    {
        password: "herbert"
    },
    {
        first_name: "Herbert"
    }, 
    {
        last_name: "Rawlings"
    }, 
    {
        school: "Oak School"
    },
    {
        role: "Teacher"
    },
    {
        email: "elara@admin.com"
    },
    {
        password: "elara"
    },
    {
        first_name: "Elara"
    }, 
    {
        last_name: "Lowry"
    }, 
    {
        school: "Oak School"
    },
    {
        role: "Teacher"
    },
    {
        email: "katelyn@oakschool.com"
    },
    {
        password: "Katelyn"
    },
    {
        first_name: "Katelyn"
    }, 
    {
        last_name: "Bray"
    }, 
    {
        school: "Oak School"
    },
]

// db.chameleondb.deletemany({})
// .then(() => db.chameleondb.collection.insertMany(studentSeed))
// .then(data => {
//    console.log(data.result.n + " records inserted!");
//    process.exit(0);
// })
// .catch(err => {
//    console.error(err);
//    process.exit(1);
// });
