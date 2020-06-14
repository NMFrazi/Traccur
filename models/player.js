const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  highestscore: { type: Number },
  numberofgames: { type: Number },
  lastgamescore: { type: Number }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
