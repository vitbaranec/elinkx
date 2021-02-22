const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//route
app.get("/", (req, res) => {
    res.send("Live");
});

mongoose.connect("mongodb+srv://elinkx:elinkx@elinkx.okq9o.mongodb.net/Customers?retryWrites=true&w=majority", //connect to MONGODB Atlas - password jsem neskryl v .env
{   useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false, 
    useCreateIndex: true  }) 
    .then(() => console.log('connected'))
    .catch(err => console.log(err)), 

app.listen(8080);
