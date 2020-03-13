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
        name: [
            {
                firstName: "Pete",
                lastName: "Zah"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Brad",
                lastName: "Gibson"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Shirley",
                lastName: "Waterford"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Joanne",
                lastName: "Johnson"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Francisco",
                lastName: "Perez"
            }
        ]
    }, 
    {
        name: [
            {
                firstName: "John",
                lastName: "Rivers"
            }
        ]
    },
    {
    
        name: [
            {
                firstName: "Joseph",
                lastName: "Olson"
            }
        ]
    }, 
    {
        name: [
            {
                firstName: "Nicole",
                lastName: "Price"
            }
        ]
    },  
    {
        name: [
            {
                firstName: "Dante",
                lastName: "Roy"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Chris",
                lastName: "Gaines"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Jordan",
                lastName: "Foley"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Meera",
                lastName: "Aguilar"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Drew",
                lastName: "Myers"
            }
        ]
    },
    {
        name: [
            {
                firstName: "Chelsea",
                lastName: "Rowland"
            }
        ]
    }
]

// ADMIN AND TEACHERS
let userSeed = [
    //ADMIN ACCOUNT
    {
        role: "Admin",
        email: "adam@oakschool.com",
        password: "adam",
        first_name: "Adam", 
        last_name: "Strater"
    },
    //TEACHERS
    {
        role: "Teacher",
        email: "riley@oakschool.com",
        password: "riley",
        first_name: "Riley", 
        last_name: "O'Ryan"
    }, 
    {
        role: "Teacher",
        email: "cheyenne@oakschool.com",
        password: "cheyenne",
        first_name: "Cheyenne", 
        last_name: "Nolan", 
    },{
        role: "Teacher",
        email: "herbert@oakschool.com",
        password: "herbert",
        first_name: "Herbert", 
        last_name: "Rawlings", 
    },{
        role: "Teacher",
        email: "elara@admin.com",
        password: "elara",
        first_name: "Elara", 
        last_name: "Lowry"
    }, 
    {
        role: "Teacher",
        email: "katelyn@oakschool.com",
        password: "Katelyn",
        first_name: "Katelyn", 
        last_name: "Bray"
    },
    {
        role: "Admin",
        email: "admin@admin.com",
        passowrd: "admin",
        first_name: "admin",
        last_name: "admin"
    },
    //GUARDIAN SEEDS
    {
        role: "Guardian",
        email: "rich@email.com",
        password: "rich",
        first_name: "Rich", 
        last_name: "Pipes"
    },
    {
        role: "Guardian",
        email: "charles@email.com",
        password: "charles",
        first_name: "Charles", 
        last_name: "Zah"
    },
    {
        role: "Guardian",
        email: "george@email.com",
        password: "george",
        first_name: "George", 
        last_name: "Gibson"
    },
    {
        role: "Guardian",
        email: "sandra@email.com",
        password: "sandra",
        first_name: "Sandra", 
        last_name: "Waterford",
    },
    {
        role: "Guardian",
        email: "terry@email.com",
        password: "terry",
        first_name: "Terry", 
        last_name: "Johnson"
    },
    {
        role: "Guardian",
        email: "juan@email.com",
        password: "juan",
        first_name: "Juan", 
        last_name: "Perez"
    },
    {
        role: "Guardian",
        email: "theresa@email.com",
        password: "theresa",
        first_name: "Theresa", 
        last_name: "Rivers",
    },
    {
        role: "Guardian",
        email: "chuck@email.com",
        password: "chuck",
        first_name: "Chuck", 
        last_name: "Olson"
    },
    {
        role: "Guardian",
        email: "jim@email.com",
        password: "jim",
        first_name: "Jim", 
        last_name: "Price"
    },
    {
        role: "Guardian",
        email: "graham@email.com",
        password: "graham",
        first_name: "Graham", 
        last_name: "Roy"
    },
    {
        role: "Guardian",
        email: "ashley@email.com",
        password: "ashley",
        first_name: "Ashley", 
        last_name: "Gaines"
    },
    {
        role: "Guardian",
        email: "shelby@email.com",
        password: "shelby",
        first_name: "Shelby", 
        last_name: "Foley"
    },
    {
        role: "Guardian",
        email: "calder@email.com",
        password: "calder",
        first_name: "Calder", 
        last_name: "Aguilar"
    },
    {
        role: "Guardian",
        email: "jack@email.com",
        password: "jack",
        first_name: "Jack", 
        last_name: "Myers"
    },
    {
        role: "Guardian",
        email: "sheena@email.com",
        password: "sheena",
        first_name: "Sheena", 
        last_name: "Rowland"
    }
]

 db.chameleondb.deleteMany({})
 .then(() => db.chameleondb.collection.insertMany(studentSeed))
 .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
 })
 .catch(err => {
    console.error(err);
    process.exit(1);
 });

 db.chameleondb.deleteMany({})
 .then(() => db.chameleondb.collection.insertMany(userSeed))
 .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
 })
 .catch(err => {
    console.error(err);
    process.exit(1);
 });
