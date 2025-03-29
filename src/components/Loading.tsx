import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <LoaderCircle
      width={64}
      height={64}
      className="text-zinc-300 animate-spin mx-auto"
    />
  );
};

export default Loading;
