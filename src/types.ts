export type Task = {
  id: any;
  label: string;
  isComplete: boolean;
};

export type TaskProps = {
  addTask: (task: Pick<Task, "label">) => void;
  focusedTask?: Task;
  task: Task[];
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
  shuffleFocusedTask: () => void;
  updateTaskComplete: (taskId: string, isComplete: boolean) => void;

};
