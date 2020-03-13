const mongoose = require("mongoose");
const db = require("../models");
// const data = require("data");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chameleondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// STUDENTS
let studentSeed = [ 
        {
        name: 
            {
                firstName: "Phil",
                lastName: "Pipes"
            }
        },
        {
        name:
            {
                firstName: "Pete",
                lastName: "Zah"
            }
        },
        {
        name:
            {
                firstName: "Brad",
                lastName: "Gibson"
            }
        },
        {
        name:
            {
                firstName: "Shirley",
                lastName: "Waterford"
            }
        },
        {
        name: 
            {
                firstName: "Joanne",
                lastName: "Johnson"
            }
        },
        {
        name:
            {
                firstName: "Francisco",
                lastName: "Perez"
            }
        },
        { 
        name:
            {
                firstName: "John",
                lastName: "Rivers"
            }
        },
        {
        name: 
            {
                firstName: "Joseph",
                lastName: "Olson"
            }
        },
        {
        name:
            {
                firstName: "Nicole",
                lastName: "Price"
            }
        },
        {  
        name:
            {
                firstName: "Dante",
                lastName: "Roy"
            }
        },
        {
        name:
            {
                firstName: "Chris",
                lastName: "Gaines"
            }
        },
        {
        name: 
            {
                firstName: "Jordan",
                lastName: "Foley"
            }
        },
        {
        name:
            {
                firstName: "Meera",
                lastName: "Aguilar"
            }
        },
        {
        name:
            {
                firstName: "Drew",
                lastName: "Myers"
            }
        },
            {
        name:
            {
                firstName: "Chelsea",
                lastName: "Rowland"
            }
    }
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
    //GUARDIAN SEEDS
    {
        role: "Guardian"
    },
    {
        email: "rich@email.com"
    },
    {
        password: "rich"
    },
    {
        first_name: "Rich"
    }, 
    {
        last_name: "Pipes"
    },
    {
        students: [0]
    },
    {
        role: "Guardian"
    },
    {
        email: "charles@email.com"
    },
    {
        password: "charles"
    },
    {
        first_name: "Charles"
    }, 
    {
        last_name: "Zah"
    },
    {
        students: [1]
    },
    {
        role: "Guardian"
    },
    {
        email: "george@email.com"
    },
    {
        password: "george"
    },
    {
        first_name: "George"
    }, 
    {
        last_name: "Gibson"
    },
    {
        students: [2]
    },
    {
        role: "Guardian"
    },
    {
        email: "sandra@email.com"
    },
    {
        password: "sandra"
    },
    {
        first_name: "Sandra"
    }, 
    {
        last_name: "Waterford"
    },
    {
        students: [3]
    },
    {
        role: "Guardian"
    },
    {
        email: "terry@email.com"
    },
    {
        password: "terry"
    },
    {
        first_name: "Terry"
    }, 
    {
        last_name: "Johnson"
    },
    {
        students: [4]
    },
    {
        role: "Guardian"
    },
    {
        email: "juan@email.com"
    },
    {
        password: "juan"
    },
    {
        first_name: "Juan"
    }, 
    {
        last_name: "Perez"
    },
    {
        students: [5]
    },
    {
        role: "Guardian"
    },
    {
        email: "theresa@email.com"
    },
    {
        password: "theresa"
    },
    {
        first_name: "Theresa"
    }, 
    {
        last_name: "Rivers"
    },
    {
        students: [6]
    },
    {
        role: "Guardian"
    },
    {
        email: "chuck@email.com"
    },
    {
        password: "chuck"
    },
    {
        first_name: "Chuck"
    }, 
    {
        last_name: "Olson"
    },
    {
        students: [7]
    },
    {
        role: "Guardian"
    },
    {
        email: "jim@email.com"
    },
    {
        password: "jim"
    },
    {
        first_name: "Jim"
    }, 
    {
        last_name: "Price"
    },
    {
        students: [8]
    },
    {
        role: "Guardian"
    },
    {
        email: "graham@email.com"
    },
    {
        password: "graham"
    },
    {
        first_name: "Graham"
    }, 
    {
        last_name: "Roy"
    },
    {
        students: [9]
    },
    {
        role: "Guardian"
    },
    {
        email: "ashley@email.com"
    },
    {
        password: "ashley"
    },
    {
        first_name: "Ashley"
    }, 
    {
        last_name: "Gaines"
    },
    {
        students: [10]
    },
    {
        role: "Guardian"
    },
    {
        email: "shelby@email.com"
    },
    {
        password: "shelby"
    },
    {
        first_name: "Shelby"
    }, 
    {
        last_name: "Foley"
    },
    {
        students: [11]
    },
    {
        role: "Guardian"
    },
    {
        email: "calder@email.com"
    },
    {
        password: "calder"
    },
    {
        first_name: "Calder"
    }, 
    {
        last_name: "Aguilar"
    },
    {
        students: [12]
    },
    {
        role: "Guardian"
    },
    {
        email: "jack@email.com"
    },
    {
        password: "jack"
    },
    {
        first_name: "Jack"
    }, 
    {
        last_name: "Myers"
    },
    {
        students: [13]
    },
    {
        role: "Guardian"
    },
    {
        email: "sheena@email.com"
    },
    {
        password: "sheena"
    },
    {
        first_name: "Sheena"
    }, 
    {
        last_name: "Rowland"
    },
    {
        students: [14]
    }
]

 db.Student.deleteMany({})
 .then(() => db.Student.collection.insertMany(studentSeed))
 .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
 })
 .catch(err => {
    console.error(err);
    process.exit(1);
 });

 db.User.deleteMany({})
 .then(() => db.User.collection.insertMany(userSeed))
 .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
 })
 .catch(err => {
    console.error(err);
    process.exit(1);
 });
