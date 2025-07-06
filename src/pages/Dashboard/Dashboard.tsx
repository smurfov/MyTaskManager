import { TaskList } from "../../widgets/Task/TaskList/TaskList";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <>
      <div className="title">My Tasks</div>
      <div className="tasks">
        <TaskList />
      </div>
    </>
  );
}

//NOTE - Imagine how will look Dashboard
