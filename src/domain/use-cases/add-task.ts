import { Task } from '../entities/task'

export interface AddTaskInput {
  title: string
  description?: string
  initialDate?: Date
  finalDate?: Date
}

export interface AddTask {
  add: (task: AddTaskInput) => Promise<Task>
}
