const express = require('express') //install karapu npm express eka import karanawa express kiyana variable ekata
const app = express() //express app ekak hadanawa
const port = 3000 // port eka set karanawa
const jwt = require("jsonwebtoken");// install karapu npm jsonwebtoken eka import karanawa
const dotenv = require('dotenv');
dotenv.config();


// parse application/x-www-form-urlencoded
app.use(express.urlencoded())

// parse application/json
app.use(express.json())

const medicineRoutes = require('./routes/medicine-routes');
app.use('/api/medicines', medicineRoutes);//localhost:3000/api/medicines


app.listen(port, () => { //app eka listen karanawa me port eka athule(me port eka thule run wewi thibe)
  console.log(`Example app listening on port ${port}`)
})
