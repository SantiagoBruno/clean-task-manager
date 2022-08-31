import { Task } from '../entities/task'
import { CreateTaskInput } from '../use-cases/create-task'

export interface CreateTaskRepo {
  create: (taskInput: CreateTaskInput) => Promise<Task>
}
