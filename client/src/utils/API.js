import axios from "axios";

export default {
  // Gets all items
  getArchive: function() {
    return axios.get("/api/archive");
  },
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/item/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  },
  signUpUser: function(userData){
    return axios.post("/api/signup");
  },
  signInUser: functi
};
