import { Task } from '../entities/task'
import { CreateData, CreateDataInput } from '../persistence/create-data'

export interface CreateTaskInput {
  title: string
  description?: string
  initialDate?: Date
  finalDate?: Date
}

export class CreateTask {
  readonly createData: CreateData

  constructor (createData: CreateData) {
    this.createData = createData
  }

  async create (taskInput: CreateTaskInput): Promise<Task> {
    const createDataInput: CreateDataInput = {
      domainName: 'task',
      data: taskInput
    }
    const task = await this.createData.create(createDataInput)
    return task
  }
}
