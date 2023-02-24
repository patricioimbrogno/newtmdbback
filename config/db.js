const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/tmbd", ()=> {
  console.log("connected")
}, e => console.error(e))

// const db = new Sequelize("newtmdb", null, null, {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false,
// });

// module.exports = db;