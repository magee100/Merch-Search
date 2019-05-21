module.exports = {
    Item: require("./archiveItem"),
    User: require("./user")
};

'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require ("mongoose");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(_dirname + "../config/config.json")[env];
const db = {};

if (config.use_env_variable){
    const Mongoose = new Mongoose (process.env[config.use_env_variable]);
}else{
    const Mongoose = new Mongoose (config.databse, config.username, config.password, config);
}

fs 
    .readdirSync(_dirname)
    .filter(function(file){
        return(file.indexOf('.') !==0) && (file !== basename) && (file.slice(-3)==='.js');
    })
    .forEach(function(file){
        var model = Mongoose['import'](path.join(_dirname, file));
        db[model.name] = model;
    });

Object.keys(db). forEach(function(modelName){
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.Mongoose = Mongoose;
db.mongoose = mongoose

module.exports =db;