const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Must Enter user name"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "You must enter password"]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;