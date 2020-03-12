import axios from "axios";

export default {
  login: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  logout: function() {
    return axios.get("/api/user/logout");
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  getTeachers: function() {
    return axios.get("/api/user/teacher");
  },
  getGuardians: function() {
    return axios.get("/api/user/guardian");
  },
  // Gets the user information for currently logged in user
  getSelf: function() {
    return axios.get("/api/user/self");
  },
  // Deletes the user with the given id
  deleteUser: function(userData) {
    console.log(userData)
    return axios.post("/api/user/delete", userData);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  }, 
  updateUser: function(userData) {
    return axios.put("/api/user/", userData);
  },
  email: (userData) => {
    return axios.post("/api/email", userData); 
  },
  createPassword: function(userData) {
    return axios.put("/api/user/update_password", userData);
  },
  createStudent: (data) => {
    return axios.post("/api/student/new", data);
  },
  findStudent: (id) => {
    return axios.get("/api/student/" + id);
  },
  getStudents: () => {
    return axios.get("/api/student/all");
  },
  createLog: (data) => {
    return axios.post("/api/dayLog/", data)
  },
  getLogs: (id) => {
    return axios.get("/api/dayLog/allLogs", id)
  },
};
