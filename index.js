const express = require("express")
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config();

//path inbuild
const path = require("path")


//join property
dotenv.config({ path: path.join(__dirname, "config", "config.env") })


const cors = require("cors")
app.use(cors());
const bodyParser = require("body-parser")
app.use(express.json())


// Routes
const todoRoutes = require("./routes/todoRoutes")
app.use("/api/todos", todoRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch(err => console.error("MongoDB connection error:", err));



app.listen(process.env.PORT,() => {
    console.log(`${process.env.PORT} server is running successfully in ${ process.env.NODE_ENV }`)
})