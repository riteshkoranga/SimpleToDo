const express = require("express");
const Task = require("../model/Task");

const router = express.Router();

// Create a new task
router.post("/", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  try {
    const newTask = new Task({
      title,
      description,
      completed: false,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({
      error: "server error 1",
    });
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//get a specific task by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

//update task by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Update task properties only if they are provided in the request body
    task.title = title !== undefined ? title : task.title;
    task.description =
      description !== undefined ? description : task.description;
    task.completed = completed !== undefined ? completed : task.completed;

    await task.save();
    //res.status(200).json(task);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Server error" });
  }
});

//delete task by its id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error 2" });
  }
});

module.exports = router;
