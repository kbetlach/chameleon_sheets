import axios from "axios";

export default {
  login: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  logout: function(userData) {
    return axios.post("/api/user/logout");
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Gets the user information for currently logged in user
  getSelf: function() {
    return axios.get("/api/user/self");
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  }, 
  updateUser: function(userData) {
    return axios.put("/api/user/", userData);
  },
  //Sends email with the user data entered
  email: (userData) => {
    return axios.post("/api/email", userData); 
  },
  createPassword: function(userData) {
    return axios.put("/api/user/update_password", userData);
  },
  //Creates new student in database
  createStudent: (data) => {
    return axios.post("/api/student/new", data);
  },
  //Finds student by student id
  findStudent: (id) => {
    return axios.get("/api/student/byID/" + id);
  },
  //Returns all students in database
  getStudents: () => {
    return axios.get("/api/student/all");
  },
  //If doesn't exsist creates new day -- If exsists updates current data
  createLog: (data) => {
    return axios.post("/api/dayLog/", data)
  },
  //Adds students the sser currently monitors 
  addStudentToTeacher: (data) => {
    return axios.post("/api/student/teacherAddStudent", data)
  },
//Returns students user currently monitors
  getUserStudents: () => {
    return axios.get("/api/student/getUserStudents")
  },

  getLog: (id, date) => {
    return axios.get('/api/dayLog/' + id + '/' + date)
  }
};
