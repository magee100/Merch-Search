const mongoose = require("mongoose");
const userSessionSchema = mongoose.Schema;

const userSessionSchema = new mongoose.Schema ({
    userID:{type: Number, default:-1},
    timestamp: {type: Date, default: Date.now()},
    isDeleted: {type: Boolean,default: false}
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

const userSessionSchema = mongoose.model("userSession", userSchema);

module.exports = userSessionSchema;