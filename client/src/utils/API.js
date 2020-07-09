import axios from "axios";

export default {
     // Gets all books
     getPlayer: function (loginInfo) {
          return axios.post("/api/getplayer", loginInfo);
     },

     registerPlayer: function (playerData) {
          return axios.post("/api/regplayer", playerData);
     },

     getUser: function () {
          return axios.get("/api/getuser");
     },

     getUserInfo: function () {
          return axios.get("/api/getuserinfo");
     },

     updateScore: function (gameData) {
          console.log("UPDATE SCORE FUNCTION RUNS");
          return axios.put("/api/updatescore", gameData);
     },

     logout: function(){
          return axios.post("/api/logout");
     }
};
