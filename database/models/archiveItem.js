const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    artist:{type: String, required: true },
    type:{type: String, required: true },
    desc:{type: String, required: true },
    color:{type: String, required: true },
    brand:{type: String, required: true },
    release: {type: String},
    photo: {type: String, required: true },
    date: { type: Date, default: Date.now },
    versionKey: false
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;