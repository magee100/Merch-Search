const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstName:{type: String, default:''},
    lastName: {type: String, default:''},
    email:{type: String, required: true},
    password:{type: String, required: true},
    isDeleted:{type: Boolean, default:false},
    versionKey: false
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;