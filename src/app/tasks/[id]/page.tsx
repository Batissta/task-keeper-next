import PageNotFound from "@/components/PageNotFound";
import { listaTask } from "@/serverActions/apiTask";

type TaskParams = {
  id: string;
};

const Task = async ({ params }: { params: TaskParams }) => {
  const { id } = await params;
  const data = await listaTask(id);

  if (!data.sucess) return <PageNotFound />;
  return <div>Task</div>;
};

export default Task;
