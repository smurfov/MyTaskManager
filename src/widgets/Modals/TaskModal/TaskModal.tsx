import { useState } from "react";
import type { ITask } from "../../../shared/types/task.type";
import "./TaskModal.scss";

interface Props {
  task: ITask;
  isOpened: boolean;
}

export function TaskModal({ task, isOpened }: Props) {
  const [isActive, setIsActive] = useState(isOpened);

  const handleClose = () => {
    setIsActive(false);
    console.log(isActive);
  };

  if (!isActive) return null;

  return (
    <div className="modal-back">
      <div className="task-modal">
        <div className="top">
          <div className="title">{task.name}</div>
        </div>
        <div className="content">
          <div className="params">
            <div className="params__item id">ID: {task.id}</div>
            <div className="params__item createdAt">
              Created At: {task.createdAt}
            </div>
            {task.updatedAt && (
              <div className="params__item updatedAt">
                Updated At: {task.updatedAt}
              </div>
            )}
            {task.assignedTo && (
              <div className="params__item assignedTo">
                {task.assignedTo.map((assigned) => (
                  <span>Assigned To: {assigned.name}</span>
                ))}
              </div>
            )}
            <div className="params__item status">Status: {task.status}</div>
          </div>
          <p className="description">
            Desscription:
            <br />
            {task.description}
          </p>
        </div>
        <div className="bottom"></div>
        <button className="close" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}
