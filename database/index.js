// Connect to the Mongo DB

const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/merchdb")
    .then(()=>{
        console.log("connected to DB")
    })
module.exports = {connection};