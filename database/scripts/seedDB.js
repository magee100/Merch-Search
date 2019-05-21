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
        desc: "Spray Paint Tiger / Paradise in Brick",
        color: "Kelly Green",
        brand: "Gildan",
        photo: "https://i.imgur.com/SIK6CYA.jpg",
        release: "Paradise In Brick Pre-order, Sold at shows in 2016",
        date: new Date(Date.now())
    },

    {
      artist: "Illusion",
      type: "Sweatshirt",
      desc: "Hand Logo (Black)",
      color: "Black",
      brand: "Gildan",
      photo: "https://i.imgur.com/IIpPVrU.jpg",
      release: "Sold at America's Hardcore 2017",
      date: new Date(Date.now())
  },

  {
    artist: "Vortex",
    type: "Shirt",
    desc: "CHIHC",
    color: "Canary",
    brand: "",
    photo: "https://i.imgur.com/3sVR2eG.jpg",
    release: "",
    date: new Date(Date.now())
},

{
  artist: "The Real Cost",
  type: "Shirt",
  desc: "Muscle Man",
  color: "Tan",
  brand: "Gildan",
  photo: "https://i.imgur.com/iZpzkKJ.jpg",
  release: "Sold on summer 2017 west coast tour",
  date: new Date(Date.now())
},

{
  artist: "Wise",
  type: "Shirt",
  desc: "Muscle Man",
  color: "Heather Grey",
  brand: "Gildan",
  photo: "https://i.imgur.com/zBoA44I.jpg",
  release: "Sold on winter 2018 west coast tour",
  date: new Date(Date.now())
},

{
  artist: "Wild Side",
  type: "Shirt",
  desc: "Devil man / Triple B Records",
  color: "White",
  brand: "Gildan",
  photo: "https://i.imgur.com/uPn7Q3Y.jpg",
  release: "",
  date: new Date(Date.now())
},

{
  artist: "Big Contest",
  type: "Shirt",
  desc: "War & Peace",
  color: "White",
  brand: "Gildan",
  photo: "https://i.imgur.com/LsDqdnC.jpg",
  release: "",
  date: new Date(Date.now())
},

{
  artist: "Red Death",
  type: "Shirt",
  desc: "Demo Artwork",
  color: "Red",
  brand: "Gildan",
  photo: "https://i.imgur.com/Vf3603u.jpg",
  release: "",
  date: new Date(Date.now())
},

{
  artist: "Mil-Spec",
  type: "Longsleeve",
  desc: "Mil-Spec? Nej Tak",
  color: "Black",
  brand: "Gildan",
  photo: "https://i.imgur.com/9gH6hJQ.jpg",
  release: "Sold at AHC 2018",
  date: new Date(Date.now())
},

{
  artist: "Overload of Natural Energy",
  type: "Shirt",
  desc: "Megawatts Not Megawars",
  color: "White",
  brand: "Gildan",
  photo: "https://i.imgur.com/GArniri.jpg",
  release: "",
  date: new Date(Date.now())
},

{
  artist: "Iron Age",
  type: "Shirt",
  desc: "Knight",
  color: "Black",
  brand: "Gildan",
  photo: "https://i.imgur.com/VZWZDrh.jpg",
  release: "Sold at 2012 Reunion Show??",
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