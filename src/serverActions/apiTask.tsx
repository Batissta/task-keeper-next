"use server";

export type tTask = {
  title: string;
  finished: boolean;
};

export const cadastraTask = async (title: string) => {
  const response = await fetch(`${process.env.API_ROUTE}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });
  const data = await response.json();
  const sucess = data.task.title ? true : false;
  return { sucess, ...(data as tTask) };
};

export const listaTasks = async () => {
  const response = await fetch(`${process.env.API_ROUTE}/api/tasks`, {
    method: "GET",
    next: { tags: ["updateTasks"] },
  });
  const data = await response.json();

  return { sucess: !data.message ? true : false, tasks: data.tasks as tTask[] };
};

export const listaTask = async (id: string) => {
  const response = await fetch(`${process.env.API_ROUTE}/api/tasks/${id}`, {
    method: "GET",
    next: { tags: ["updateOneTask"] },
  });
  const data = await response.json();

  return { sucess: !data.message ? true : false, tasks: data.tasks as tTask };
};
