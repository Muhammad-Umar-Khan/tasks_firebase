import useHttp from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, makeHttpRequest: sendTaskRequest } = useHttp();
  
  const enterTaskHandler = async (taskText) => {
    const config = {
      url: "https://react-tasks-e104d-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      method: "POST",
      body: { text: taskText },
      headers: {
        "Content-Type": "application/json",
      },
    };

    const applyData = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };
    sendTaskRequest(config, applyData);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
