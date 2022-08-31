import { TaskModel } from '../entities/task'

export interface AddTaskModel {
  title: string
  description: string
  initialDate: Date
  finalDate: Date
}

export interface AddTask {
  add: (task: AddTaskModel) => Promise<TaskModel>
}
