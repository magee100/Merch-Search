const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema ({
    email: {
        type: String, 
        allowNull: false, 
        unique: true, 
    }, 
    password: {
        type: String, 
        allowNull: false,
    },
    firstName: {
        type: String,
        allowNull: false,
    },
    lastName: {
        type: String,
        allowNull: false
    }

});

UserSchema.methods.validPassword = function (password){
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
    next();
});

const User = mongoose.model("User", UserSchema)

module.exports = User;