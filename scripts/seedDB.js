const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/merchdb"
);

const itemSeed =[
    {
        artist: "Krust",
        type: "Shirt",
        desc: "Paradise in Brick / Spray paint Tiger",
        color: "Kelly Green",
        brand: "Gildan",
        photo: "https://i.imgur.com/SIK6CYA.jpg",
        date: new Date(Date.now())
    },
    {
      artist: "Arust",
      type: "Shirt",
      desc: "Paradise in Brick / Spray paint Tiger",
      color: "Kelly Green",
      brand: "Gildan",
      photo: "https://i.imgur.com/SIK6CYA.jpg",
      date: new Date(Date.now())
  },
  {
    artist: "Krust",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://i.imgur.com/SIK6CYA.jpg",
    date: new Date(Date.now())
},
{
  artist: "Arust",
  type: "Shirt",
  desc: "Paradise in Brick / Spray paint Tiger",
  color: "Kelly Green",
  brand: "Gildan",
  photo: "https://i.imgur.com/SIK6CYA.jpg",
  date: new Date(Date.now())
},
{
  artist: "Krust",
  type: "Shirt",
  desc: "Paradise in Brick / Spray paint Tiger",
  color: "Kelly Green",
  brand: "Gildan",
  photo: "https://i.imgur.com/SIK6CYA.jpg",
  date: new Date(Date.now())
},
{
artist: "Arust",
type: "Shirt",
desc: "Paradise in Brick / Spray paint Tiger",
color: "Kelly Green",
brand: "Gildan",
photo: "https://i.imgur.com/SIK6CYA.jpg",
date: new Date(Date.now())
},
];

db.Item
.remove({})
.then(() => db.Item.collection.insertMany(itemSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});