const express = require('express');
const PORT = process.env.PORT || 3000;
const PostRoute =require("./routes/post.routes")
require("dotenv").config()
// const connectDB = require("./config/db")

//connexion à la base de donnée
require('./config/db.js');

// connectDB()

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",PostRoute);

app.listen(PORT,()=>{
    console.log("Attende de requete au port "+ PORT)
})