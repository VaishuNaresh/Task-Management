
//path inbuild
const path = require("path")
const dotenv = require("dotenv")

//join property
dotenv.config({ path: path.join(__dirname, "config", ".env") })
// dotenv.config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");

const cors = require("cors")
app.use(cors());
const bodyParser = require("body-parser")
app.use(express.json())


// Routes
const todoRoutes = require("./routes/todoRoutes")
app.use("/api/todos", todoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        const PORT = process.env.PORT || 5000;
     app.listen(PORT,() => {
    console.log(`${PORT} server is running successfully in ${ process.env.NODE_ENV }`)
})
    })
    .catch(err => console.error("MongoDB connection error:", err));



