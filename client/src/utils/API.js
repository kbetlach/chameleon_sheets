import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
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
  updateUser: function(id, userData) {
    return axios.update("/api/user/" + id, userData);
  },
  email: (userData) => {
    return axios.post("/api/email", userData); 
  },
  createPassword: function(userData) {
    return axios.update("/api/update_password/", userData);
  },
  createStudent: (data) => {
    return axios.post("/api/student/new", data);
  }
};
