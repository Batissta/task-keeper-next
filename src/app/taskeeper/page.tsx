import { listaTasks } from "@/serverActions/apiTask";
import React from "react";

const Taskeeper = async () => {
  const data = await listaTasks();
  return (
    <main>
      <h1>Suas Tarefas ficam por aqui.</h1>
      {data.sucess &&
        data.tasks.map((task, i) => (
          <div key={`${task.title}_${i}`}>
            <p>{task.title}</p>
          </div>
        ))}
    </main>
  );
};

export default Taskeeper;
