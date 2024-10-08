import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({ title, description, completed: false });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-4 mt-11 border border-gray-300 rounded shadow-lg overflow-hidden">
      <h2 className="font-mono text-3xl mb-4 mt-3">Add New Task</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white p-6 rounded shadow-md"
      >
        <label htmlFor="task" className="text-xl ml-1 my-1 font-mono">
          Task
        </label>
        <input
          name="task"
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 text-lg mb-4 border border-gray-300 rounded font-mono"
        />
        <label
          htmlFor="taskDescription"
          className="text-xl ml-1 mb-1 font-mono"
        >
          Task Description
        </label>
        <textarea
          name="taskDescription"
          placeholder="Task Description"
          value={description}
          rows={4} // Reduced rows for better responsiveness
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded font-mono"
        ></textarea>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full md:w-3/7 font-mono text-center p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200 text-xl" // Adjusted width for better mobile support
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
