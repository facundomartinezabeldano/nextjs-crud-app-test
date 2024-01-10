import TaskCard from "./components/TaskCard";

const loadTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const data = await res.json();
  return data;
};

const HomePage = async () => {
  const tasks = await loadTasks();
  return (
    <div>
      <div className="container flex justify-center text-4xl">
        <h1>Tasks</h1>
      </div>
      <div className="grid grid-cols-3">
        {tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;