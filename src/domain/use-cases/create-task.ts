import { Task } from '../entities/task'
import { CreateTaskRepo } from '../persistence/create-task-repo'

export interface CreateTaskInput {
  title: string
  description?: string
  initialDate?: Date
  finalDate?: Date
}

export class CreateTask {
  readonly createTaskRepo: CreateTaskRepo

  constructor (createTaskRepo: CreateTaskRepo) {
    this.createTaskRepo = createTaskRepo
  }

  async create (createTaskInput: CreateTaskInput): Promise<Task> {
    const task = await this.createTaskRepo.create(createTaskInput)
    return task
  }
}
