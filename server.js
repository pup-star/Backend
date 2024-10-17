const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const InsertRoute = require("./routes/insert")

dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(()=> console.log("connected database"))
.catch(()=> console.log("Error"))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/insert', InsertRoute),


app.listen(process.env.PORT || 6000, () => console.log(`server is running on port ${process.env.PORT}`));