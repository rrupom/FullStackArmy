function filterTask(tasks, visibility) {
  if (visibility === "all") {
    return tasks;
  }

  if (visibility === "completed") {
    const completedTasks = tasks.filter((task) => task.isCompleted);
    return completedTasks;
  }

  if (visibility === "incomplete") {
    const incompleteTasks = tasks.filter((task) => !task.isCompleted);
    return incompleteTasks;
  }
}

function FilteredTasks({ tasks, visibility }) {
  const filteredTasks = filterTask(tasks, visibility);

  return (
    <div>
      <h3 style={{ margin: "0.5rem 0rem" }}>Filtered Task:</h3>
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((task) => (
            <li style={{ listStyleType: "none" }}>{task.text}</li>
          ))}
        </ul>
      ) : (
        <p>No task available</p>
      )}
    </div>
  );
}

export default FilteredTasks;
