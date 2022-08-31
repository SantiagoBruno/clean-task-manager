import { Task } from '../entities/task'
import { CreateTask, CreateTaskInput } from './create-task'
import { CreateTaskRepo } from '../persistence/create-task-repo'

const makeCreateTaskRepo = (): CreateTaskRepo => {
  class DbCreateTaskRepo implements CreateTaskRepo {
    async create (createTaskInput: CreateTaskInput): Promise<Task> {
      const task: Task = {
        id: 1,
        ...createTaskInput
      }
      return await new Promise(resolve => resolve(task))
    }
  }
  return new DbCreateTaskRepo()
}

const makeSut = (): {
  createTask: CreateTask
  createTaskRepoStub: CreateTaskRepo
} => {
  const createTaskRepoStub = makeCreateTaskRepo()
  const createTask: CreateTask = new CreateTask(createTaskRepoStub)
  return {
    createTask,
    createTaskRepoStub
  }
}

describe('CreateTask tests', () => {
  test('Should call create data with correct domain name and data', async () => {
    const {
      createTask: sut,
      createTaskRepoStub
    } = makeSut()
    const createSpy = jest.spyOn(createTaskRepoStub, 'create')
    const taskInput: CreateTaskInput = { title: 'valid title' }
    await sut.create(taskInput)
    expect(createSpy).toHaveBeenCalledWith({ title: 'valid title' })
  })
})
