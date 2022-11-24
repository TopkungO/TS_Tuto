export type Task = {
  id: any;
  label: string;
  isComplete: boolean;
};

export type TaskProps = {
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
};
