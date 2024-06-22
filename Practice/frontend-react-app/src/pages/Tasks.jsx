import { useState } from "react";
import { nanoid } from "nanoid";
import Layout from "../components/layout/Layout";
import CreateTask from "../components/tasks/CreateTask";
import ShowTasks from "../components/tasks/ShowTasks";
import InputGroup from "../components/tasks/InputGroup";
import FilteredTasks from "../components/tasks/FilteredTasks";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createAt: new Date(),
      id: nanoid(),
    };

    setTasks([task, ...tasks]);
  };

  const updateTask = (id, value) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const beforeTasks = tasks.slice(0, taskIndex);
    const afterTasks = tasks.slice(taskIndex + 1);
    const task = tasks[taskIndex];
    task.isCompleted = value;
    setTasks([...beforeTasks, task, ...afterTasks]);
  };

  const handleVisibility = (value) => {
    setVisibility(value);
  };

  return (
    <Layout>
      <InputGroup handleVisibility={handleVisibility} />
      <h1>Tasks</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} updateTask={updateTask} />
      <FilteredTasks tasks={tasks} visibility={visibility} />
    </Layout>
  );
}

export default Tasks;

/** TODO:
 * Requirements for the projects
 * - Create New Task
 * - Display All Tasks
 * - Filter Tesks by Complete Incomplete All
 * - Delete Tasks
 * - Edit Tasks
 */
