import axios from "axios";

export default {
     // Gets all books
     getPlayer: function (loginInfo) {
          return axios.post("/api/getplayer", loginInfo);
     },
     // // Gets the book with the given id
     // getBook: function (id) {
     //      return axios.get("/api/books/" + id);
     // },
     // // Deletes the book with the given id
     // deleteBook: function (id) {
     //      return axios.delete("/api/books/" + id);
     // },
     // Saves a book to the database
     registerPlayer: function (playerData) {
          return axios.post("/api/regplayer", playerData);
     }
};
