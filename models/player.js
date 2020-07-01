const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const playerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String, required: true },
  highestscore: { type: Number },
  numberofgames: { type: Number },
  lastgamescore: { type: Number }
});

playerSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

playerSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
