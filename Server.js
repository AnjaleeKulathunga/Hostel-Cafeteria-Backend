const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//Import routes
const OrderRoutes = require('./routes/OrderRoute');
const ContactusRoute= require('./routes/ContactusRoute');
//Use routes
app.use(express.json());
app.use('/orders', OrderRoutes);
app.use('/contact', ContactusRoute);


const url = process.env.MONGODB_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection success!")
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});