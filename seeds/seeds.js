const mongoose = require("mongoose");
const db = require("../models");
// const data = require("data");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bschameleondb", {
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
// PWs currently hashes of lowercase first names
let userSeed = [
    //ADMIN ACCOUNT
    {
        role: "Admin",
        email: "adam@oakschool.com",
        password: "$2b$10$UlAJN36c4Ys0PunzJcb5C.u6.ON7j7eOHnwYLx9YBX2Sk23S7jGTC",
        first_name: "Adam", 
        last_name: "Strater"
    },
    //TEACHERS
    {
        role: "Teacher",
        email: "riley@oakschool.com",
        password: "$2b$10$YpojbLUX1GeVBQ0wRFdh1uwSVw6b.JHezeMf3.aowz/hK9SOzMc0S",
        first_name: "Riley", 
        last_name: "O'Ryan"
    }, 
    {
        role: "Teacher",
        email: "cheyenne@oakschool.com",
        password: "$2b$10$fYIXpWOjuLrglkDbd1kLPuYEMHyW7z.7R4kpo4uqCIBpk1UzIkxha",
        first_name: "Cheyenne", 
        last_name: "Nolan", 
    },{
        role: "Teacher",
        email: "herbert@oakschool.com",
        password: "$2b$10$1xqUybrYonwfFjbOsFtG8.0AIHcyCH2uLCA6jvzBw9bpBGdhIqiAa",
        first_name: "Herbert", 
        last_name: "Rawlings", 
    },{
        role: "Teacher",
        email: "elara@admin.com",
        password: "$2b$10$FpQdeaumQQQRwgF89Q1AFeUjLOQqUZUaDbU.fZkK8ly/qSts9NPm6",
        first_name: "Elara", 
        last_name: "Lowry"
    }, 
    {
        role: "Teacher",
        email: "katelyn@oakschool.com",
        password: "$2b$10$dJil3QfFkPmDy5xIWqNCxu1XZCj5vCW71YjRBloTgZZG2L8uu4AXi",
        first_name: "Katelyn", 
        last_name: "Bray"
    },
    {
        role: "Admin",
        email: "admin@admin.com",
        password: "$2b$10$2BgRbOamAtmcdT4lUIOloOKeGBuvOYSeISEjKDwvfOvdgICyxAqES",
        first_name: "admin",
        last_name: "admin",
        students:
        [
            {
                "firstName" : "Phil",
                "lastName" : "Pipes",
                "id" : "5ea8f9fa74e5970fb513e2e4"
            },
            {
                "firstName" : "Pete",
                "lastName" : "Zah",
                "id" : "5ea8f9fa74e5970fb513e2e5"
            },
            {
                "firstName" : "Brad",
                "lastName" : "Gibson",
                "id" : "5ea8f9fa74e5970fb513e2e6"
            },
            {
                "firstName" : "Shirley",
                "lastName" : "Waterford",
                "id" : "5ea8f9fa74e5970fb513e2e7"
            }
        ]
    },
    //GUARDIAN SEEDS
    {
        role: "Guardian",
        email: "rich@email.com",
        password: "$2b$10$320heWfEuoJmvfZSNlWuY.FItP594b2fdIRX8YtqnYl3JDfT8AAsa",
        first_name: "Rich", 
        last_name: "Pipes"
    },
    {
        role: "Guardian",
        email: "charles@email.com",
        password: "$2b$10$bhJ6Uhpld2YDoGybjwYv0uG.0CgY5LJZwtxI1fzi.N75kKga6Y.qu",
        first_name: "Charles", 
        last_name: "Zah"
    },
    {
        role: "Guardian",
        email: "george@email.com",
        password: "$2b$10$nIjWKMhRCm4Sw1xxnjv1qu6fW/fJKmbIDnxI8aol8akwO2OvCf4fa",
        first_name: "George", 
        last_name: "Gibson"
    },
    {
        role: "Guardian",
        email: "sandra@email.com",
        password: "$2b$10$M0srmq3HeIOzZWyG1odU/eYfHXA/3m3E8vMBbCqYAx5X5RO2R7muC",
        first_name: "Sandra", 
        last_name: "Waterford",
    },
    {
        role: "Guardian",
        email: "terry@email.com",
        password: "$2b$10$JzTyDeLe6S5isGnFwqNbg.Bnb/jEU4iMS.w8sfpSzSrpU/PTvQJQm",
        first_name: "Terry", 
        last_name: "Johnson"
    },
    {
        role: "Guardian",
        email: "juan@email.com",
        password: "$2b$10$t1BSWsQGzXT.QtL3YKgPGOSYlydwhRwad3XNHmibi15QZmrXrysIu",
        first_name: "Juan", 
        last_name: "Perez"
    },
    {
        role: "Guardian",
        email: "theresa@email.com",
        password: "$2b$10$PXxHTn6JZ9YE2pmdrAQL1ec9H6oULNaW/VwN9k6yFu2U38KG6Eqba",
        first_name: "Theresa", 
        last_name: "Rivers",
    },
    {
        role: "Guardian",
        email: "chuck@email.com",
        password: "$2b$10$qsTdPVZ7DG/tg1pGVNHtbuUXFKKMVL.ksA1Gw9yRN6RmAeOOJKqQG",
        first_name: "Chuck", 
        last_name: "Olson"
    },
    {
        role: "Guardian",
        email: "jim@email.com",
        password: "$2b$10$xkvmCYZzMuoYYAnXW5tCWeAmGQtsZhE512eZWm2DIozEkcZUKbtD2",
        first_name: "Jim", 
        last_name: "Price"
    },
    {
        role: "Guardian",
        email: "graham@email.com",
        password: "$2b$10$UMNCfglDRq6L9b4yi/SZx.SQIoHATYs7Q8TXgAoph0mbEu8S8Ar6K",
        first_name: "Graham", 
        last_name: "Roy"
    },
    {
        role: "Guardian",
        email: "ashley@email.com",
        password: "$2b$10$snhOx7IKzk8OVdRHBUs/YeUNpgB6/TBTNvfElXseEdHn2zBO0ZcGW",
        first_name: "Ashley", 
        last_name: "Gaines"
    },
    {
        role: "Guardian",
        email: "shelby@email.com",
        password: "$2b$10$Lb9odq77r.wgHS/ux3eM.uqF/ddatmHXrWgxJCynyTTbQaZLSFI2G",
        first_name: "Shelby", 
        last_name: "Foley"
    },
    {
        role: "Guardian",
        email: "calder@email.com",
        password: "$2b$10$05ZwbT0m7Ko.yJ2XUaMkAe72lQHkGDrsmYUy8VsSF6VVnTI8KG4jO",
        first_name: "Calder", 
        last_name: "Aguilar"
    },
    {
        role: "Guardian",
        email: "jack@email.com",
        password: "$2b$10$8hyeS9ezKxpG921h8CBOYuKsxXMXD6a2DItDT05ri6y/jedtGqx/m",
        first_name: "Jack", 
        last_name: "Myers"
    },
    {
        role: "Guardian",
        email: "sheena@email.com",
        password: "$2b$10$lzveCD1ybDHErcaUnY7ryOdK2.Sbzhj4IW2tzW06/EnLPT2aT0I0C",
        first_name: "Sheena", 
        last_name: "Rowland"
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
