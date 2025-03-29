import { listaTasks } from "@/serverActions/apiTask";
import React from "react";
import TaskCard from "./TaskCard";

const TasksList = async () => {
  const data = await listaTasks();
  if (!data.sucess || data.tasks.length === 0)
    return <p>Nenhuma tarefa encontrada.</p>;
  return (
    <ul
      className={`grid  ${
        data.tasks.length === 1
          ? "grid-cols-1"
          : data.tasks.length % 2 === 0
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      } gap-6`}
    >
      {data.tasks.map((task, i) => (
        <TaskCard
          key={`${task.title}_${i}`}
          title={task.title}
          finished={task.finished}
          description={task.description}
        />
      ))}
    </ul>
  );
};

export default TasksList;
