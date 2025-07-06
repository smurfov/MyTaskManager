import { useEffect, useState } from "react";
import "./TaskList.scss";
import type { ITask } from "../../../shared/types/task.type";
import { Tasks } from "../../../data/task.data";
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList() {
  const [taksList, setTaksList] = useState<ITask[] | null>(null);

  useEffect(() => {
    setTaksList(Tasks);
  }, []);

  const handeDeleteTask = (task: ITask) => {
    console.log(task.id);
  };

  return (
    <div className="task-list">
      {taksList &&
        taksList.length > 0 &&
        taksList?.map((task, index) => (
          <TaskItem key={index} task={task} handleDelete={handeDeleteTask} />
        ))}
    </div>
  );
}
