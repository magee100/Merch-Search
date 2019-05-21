const path = require("path");

const isAuthenticated = require ("../../config/middleware/isAuthenticated")

module.exports = function(app){
    app.get("/", function(req,res){
        if(req.user){
            res/redorect("/members");
        }
        res.sendFile(path.join(__dirname, "../../config/public/LogIn/signup.html"));
    });
    app.get("/login", function(req, res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../../config/public/LogIn/login.html"));
    });
    app.get("/members", isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname, "../../config/public/LogIn/members.html"))
    });
};