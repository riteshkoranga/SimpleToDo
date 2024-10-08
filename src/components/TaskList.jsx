import React from "react";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
            <button
              onClick={() =>
                updateTask(task._id, { completed: !task.completed })
              }
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
