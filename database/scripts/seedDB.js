const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/merchdb"
);
const itemSeed = [
  {
    artist: "Fury",
    type: "Shirt",
    desc: "Kingdom Come Pocket Print / Sleeve Print / Triple B Records",
    color: "Black",
    brand: "Gildan",
    photo: ["https://i.imgur.com/REYbYwz.jpg","https://i.imgur.com/8QvTPUZ.jpg","https://i.imgur.com/uKFFrPW.jpg"],
    release: "Sold on Nuke the Nation 2015 tour",
    date: new Date(Date.now())
  },

  

  {
    artist: "Illusion",
    type: "Shirt",
    desc: "Hand Logo (Purple) W/ 'Game of Fate' Backprint",
    color: "Black",
    brand: "Gildan",
    photo: ["https://i.imgur.com/0vGx1Dw.jpg","https://i.imgur.com/77DkpnW.jpg"],
    release: "Sold at shows in early 2018",
    date: new Date(Date.now())
  },

  {
    artist: "Power Trip",
    type: "Shirt",
    desc: "RIP Los Angeles Cemetary",
    color: "Black",
    brand: "Alstyle",
    photo: ["https://i.imgur.com/gIg7xF0.jpg","https://i.imgur.com/MmY8umZ.jpg"],
    release: "Sold April 8th, 2017 at The Teragram Ballroom, LA Exclusive",
    date: new Date(Date.now())
  },

  {
    artist: "The Rival Mob",
    type: "Shirt",
    desc: "One Mob to Rule Them All",
    color: "Black",
    brand: "Gildan",
    photo: "https://i.imgur.com/EETAMQE.jpg",
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "The Rival Mob",
    type: "Shirt",
    desc: "Sabertooth Attack X-Ray / Raw Life",
    color: "Black",
    brand: "Fruit of the Loom",
    photo: ["https://i.imgur.com/odiKhqK.jpg","https://i.imgur.com/qc94Bai.jpg"],
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Krust",
    type: "Shirt",
    desc: "Spray Paint Tiger / Paradise in Brick",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://i.imgur.com/SIK6CYA.jpg",
    release: "Sold at shows in 2016",
    date: new Date(Date.now())
  },

  {
    artist: "Abuse of Power",
    type: "Shirt",
    desc: "When Then Becomes Now 2017 Summer Tour",
    color: "White",
    brand: "Gildan",
    photo: "https://i.imgur.com/ua3hcLf.jpg",
    release: "Sold at shows in summer 2017",
    date: new Date(Date.now())
  },

  {
    artist: "Construct",
    type: "Shirt",
    desc: "Sun Logo",
    color: "Navy Blue",
    brand: "Gildan",
    photo: "https://i.imgur.com/s8ckhZ2.jpg",
    release: "Sold at shows in November 2018",
    date: new Date(Date.now())
  },

  {
    artist: "Illusion",
    type: "Shirt",
    desc: "Magic With a Smile Card Trick",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://i.imgur.com/jxILl71.jpg",
    release: "Sold at AHC 2018 and online pre-order in December 2017",
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
    brand: "N/A",
    photo: "https://i.imgur.com/3sVR2eG.jpg",
    release: "N/A",
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
    desc: "Exist Beyond Doubt",
    color: "Heather Grey",
    brand: "Gildan",
    photo: "https://i.imgur.com/zBoA44I.jpg",
    release: "Sold on winter 2018 west coast tour",
    date: new Date(Date.now())
  },
  
  {
    artist: "Illusion",
    type: "Shirt",
    desc: "Hand Logo (Orange) W/ 'Hour in Dreamland' Backprint",
    color: "Black",
    brand: "Gildan",
    photo: ["https://i.imgur.com/tk1R7HM.jpg","https://i.imgur.com/52Nt0RD.jpg"],
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Wild Side",
    type: "Shirt",
    desc: "Devil man / Triple B Records",
    color: "White",
    brand: "Gildan",
    photo: "https://i.imgur.com/uPn7Q3Y.jpg",
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Big Contest",
    type: "Shirt",
    desc: "War & Peace",
    color: "White",
    brand: "Gildan",
    photo: "https://i.imgur.com/LsDqdnC.jpg",
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Red Death",
    type: "Shirt",
    desc: "Demo Artwork",
    color: "Red",
    brand: "Gildan",
    photo: "https://i.imgur.com/Vf3603u.jpg",
    release: "N/A",
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
    release: "N/A",
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

  {
    artist: "Trash Talk",
    type: "Shirt",
    desc: "Eyes & Nines / Trash Talk Destroy",
    color: "Black",
    brand: "Gildan",
    photo: "https://i.imgur.com/2AoUhPj.jpg",
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Trash Talk",
    type: "Shirt",
    desc: "Riot / Trash Talk Destroy",
    color: "Black",
    brand: "Gildan",
    photo: "https://i.imgur.com/AoV2riZ.jpg",
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Illusion",
    type: "Shirt",
    desc: "Hand Logo (Blue) W/ 'Illusion of Time' Backprint",
    color: "Black",
    brand: "Gildan",
    photo: ["https://i.imgur.com/tDnpqlc.jpg","https://i.imgur.com/S19TkHk.jpg"],
    release: "Sold at Damaged City 2018 and online pre-order December 2018",
    date: new Date(Date.now())
  },

  {
    artist: "Trash Talk",
    type: "Shirt",
    desc: "White Marble / Trash Talk Destroy",
    color: "Black",
    brand: "Made in Babylon,CA",
    photo: "https://i.imgur.com/tezBexx.jpg",
    release: "Sold online in 2015",
    date: new Date(Date.now())
  },

  {
    artist: "Power Trip",
    type: "Shirt",
    desc: "We Trippy Mane W/ 'You Say No' Backprint",
    color: "Black",
    brand: "Hanes",
    photo: ["https://i.imgur.com/XBy9MOA.jpg","https://i.imgur.com/EiRGEpQ.jpg"],
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "Discrepancy",
    type: "Shirt",
    desc: "Hardstance Rip Front (Yellow/Grey) & Back (White/Blue)",
    color: "Black",
    brand: "N/A",
    photo: ["https://i.imgur.com/aBRle0q.jpg","https://i.imgur.com/Y4X5Wmb.jpg"],
    release: "N/A",
    date: new Date(Date.now())
  },

  {
    artist: "War Hungry",
    type: "Shirt",
    desc: "Mayan War Party",
    color: "Black",
    brand: "Gildan",
    photo: "https://i.imgur.com/C6JIPz6.jpg",
    release: "N/A",
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