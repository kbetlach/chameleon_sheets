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
  email: (userData) => {
    return axios.post("/api/email", userData); 
  },
  createPassword: function(userData) {
    return axios.put("/api/user/update_password", userData);
  },
  createStudent: (data) => {
    return axios.post("/api/student/new", data);
  },
  findStudent: (data) => {
    return axios.get("/api/dayLog/");
  }
};
