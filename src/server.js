const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.get("/",(req,res)=>{
    res.send("API")
});

app.listen(PORT, () => {
    console.log("running on port 3001");
});