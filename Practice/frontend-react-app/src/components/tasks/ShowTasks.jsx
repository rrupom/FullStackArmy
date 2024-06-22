import SingleTask from "./SingleTask";

function ShowTasks({ tasks, updateTask }) {
  return (
    <div>
      <h3 style={{ margin: "0.5rem 0rem" }}>All Tasks :</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((item) => (
            <SingleTask task={item} updateTask={updateTask} />
          ))}
        </ul>
      ) : (
        <p>No task found</p>
      )}
    </div>
  );
}

export default ShowTasks;
