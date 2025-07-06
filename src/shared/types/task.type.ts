interface AssignedToTask {
  id: number;
  name: string;
}

type TaskStatus = "completed" | "in progress" | "not started";

export interface ITask {
  name: string;
  id: number;
  description: string;
  createdAt: string;
  updatedAt?: string;
  assignedTo?: AssignedToTask[];
  status: TaskStatus;
}
