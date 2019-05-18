const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/merchdb"
);

const itemSeed = [
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
    artist: "Black Shirt",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://images-na.ssl-images-amazon.com/images/I/9156HfpWSjL._UX679_.jpg",
    date: new Date(Date.now())
  },
  {
    artist: "Gray Shirt",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://www.rei.com/media/36f68369-117c-44e8-824c-e9a09f821616?size=512x682",
    date: new Date(Date.now())
  },
  {
    artist: "White Shirt",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://cdn.shopify.com/s/files/1/0123/5065/2473/products/buck_mason-white_perfect_oxford_one_pocket_shirt-thumb_1000x1000.jpg?v=1542411554",
    date: new Date(Date.now())
  },
  {
    artist: "White Shirt",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://cdn.shopify.com/s/files/1/0123/5065/2473/products/buck_mason-white_perfect_oxford_one_pocket_shirt-thumb_1000x1000.jpg?v=1542411554",
    date: new Date(Date.now())
  },
  {
    artist: "Gray Shirt",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://www.rei.com/media/36f68369-117c-44e8-824c-e9a09f821616?size=512x682",
    date: new Date(Date.now())
  },
  {
    artist: "Black Shirt",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "https://images-na.ssl-images-amazon.com/images/I/9156HfpWSjL._UX679_.jpg",
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
    artist: "Krust",
    type: "Shirt",
    desc: "Paradise in Brick / Spray paint Tiger",
    color: "Kelly Green",
    brand: "Gildan",
    photo: "  https://jiffyshirts1.imgix.net/7e6a8da07576ec.jpg?ixlib=rb-0.3.4&auto=format&w=288&h=450&q=80&fit=crop",
    date: new Date(Date.now())
  }
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