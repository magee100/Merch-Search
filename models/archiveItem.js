const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    artist:{type: String, required: true },
    type:{type: String, required: true },
    desc:{type: String, required: true },
    color:{type: String, required: true },
    brand:{type: String, required: true },
    info:{type: String},
    date: { type: Date, default: Date.now }
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;