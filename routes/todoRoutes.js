const express = require("express")
const  Todo =require("../models/Todo");

const router = express.Router();

// GET ALL TODOS
router.get("/todos", async (req, res) => {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
});

// GET COMPLETED TODOS
router.get("/completed", async (req, res) => {
    const completed = await Todo.find({ completed: true }).sort({ createdAt: -1 });
    res.json(completed);
});

// ADD TODO
router.post("/", async (req, res) => {
    const todo = await Todo.create({ text: req.body.text });
    res.json(todo);
});

// MARK AS COMPLETED
router.patch("/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(todo);
});

// DELETE TODO
router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
});

// export default router;

module.exports = router 
