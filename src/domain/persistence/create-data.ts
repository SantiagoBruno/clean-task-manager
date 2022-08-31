import { Task } from '../entities/task'
import { CreateTaskInput } from '../use-cases/create-task'

export interface CreateDataInput {
  domainName: string
  data: CreateTaskInput
}

export interface CreateData {
  create: (data: CreateDataInput) => Promise<Task>
}
