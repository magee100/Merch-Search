const bcrypt = require("bcrypt-nodejs");

module.exports = function(mongoose, DataTypes){
    const User = mongoose.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    //Creating a custom method for our User model. 
    //This will check if an unhashed password entered by the user
    // can be compared to the hashed password store in our datbase
    User.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password);
    };
    //Hooks are automatic methods that run during various phases of the User Model Lifecycle
    User.hook("beforeCreate", function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};
// const Schema = mongoose.Schema;

// const userSchema = new Schema ({
//     firstName:{type: String, default:''},
//     lastName: {type: String, default:''},
//     email:{type: String, required: true},
//     password:{type: String, required: true},
//     isDeleted:{type: Boolean, default:false},
//     versionKey: false
// });



// userSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// }

// userSchema.methods.validPassword = function(password){
//     return bcrypt.compareSync(password, this.password);
// };

// const User = mongoose.model("User", userSchema);

// module.exports = User;