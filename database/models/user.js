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
        allowNull: false
    }
});


// userSchema.methods.findSimilarTypes = function (mongoose, DataTypes){
//     return this.model("User").find({type: this.type}, mongoose, DataTypes)
// }; 

UserSchema.methods.validPassword = function (password){
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
    next();
});

const User = mongoose.model("User", UserSchema)

module.exports = User;


    // CHANGE TO MONGOOSE (user.methods) can be compared to the hashed password store in our datbase
    // User.prototype.validPassword = function(password){
    //     return bcrypt.compareSync(password, this.password);
    // };
    //CHANGE TO MONGOOSE Hooks are automatic methods that run during various phases of the User Model Lifecycle
//     User.hook("beforeCreate", function(user){
//         user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//     });
//     return User;
// };

//



// module.exports = function(mongoose, DataTypes){
//     const User = mongoose.define("User", {
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         // The password cannot be null
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });
    //Creating a custom method for our User model. 
    //This will check if an unhashed password entered by the user
