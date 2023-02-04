import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const config = useCallback({
    url: "https://react-tasks-e104d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
  }, []);
  const { isLoading, error, makeHttpRequest: fetchTasks } = useHttp(); //use the useHttp hook;

  useEffect(() => {
    const transformTasks = (tasksObject) => {
      const loadedTasks = [];

      for (const taskKey in tasksObject) {
        loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(config, transformTasks);
  }, [fetchTasks, config]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
