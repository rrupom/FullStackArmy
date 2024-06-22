function CompletedTasks({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
