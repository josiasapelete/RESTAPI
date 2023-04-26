const express = require('express');
const PORT = process.env.PORT || 3000;
const PostRoute =require("./routes/post.routes")
require("dotenv").config()
const connectDB = require("./config/db")

//connexion à la base de donnée
require('./config/db.js');

// connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",PostRoute);

app.listen(PORT,()=>{
    console.log("Attende de requete au port "+ PORT)
})