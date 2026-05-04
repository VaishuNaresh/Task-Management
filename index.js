
//path inbuild
const path = require("path")
const dotenv = require("dotenv")

//join property
// dotenv.config({ path: path.join(__dirname, "config", ".env") })
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

const PORT = process.env.PORT || 5000;

// connect DB FIRST but don't block server
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Mongo error:", err));

// ALWAYS start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
