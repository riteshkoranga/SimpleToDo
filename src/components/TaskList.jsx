import "../style/list.css";
const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      <h2 className="text-center text-2xl font-mono mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-center font-mono">No tasks available.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="task border border-gray-300 p-4 rounded shadow-lg"
            >
              <h3
                className={`text-lg font-semibold font-mono ${
                  task.completed ? "red-line" : ""
                }`}
              >
                {task.title}
              </h3>
              <p
                className={`text-gray-700 font-mono ${
                  task.completed ? "red-line" : ""
                }`}
              >
                {task.description}
              </p>
              <p className="text-sm font-mono border-none">
                Status: {task.completed ? "Completed" : "Incomplete"}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() =>
                    updateTask(task._id, { completed: !task.completed })
                  }
                  className="text-blue-500 hover:underline font-mono"
                >
                  {task.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500 hover:underline font-mono"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
