import { Task } from '../entities/task'
import { CreateTask, CreateTaskInput } from './create-task'
import { CreateData, CreateDataInput } from '../persistence/create-data'

const makeCreateData = (): CreateData => {
  class DbCreateData implements CreateData {
    async create (data: CreateDataInput): Promise<Task> {
      const task: Task = {
        id: 1,
        ...data.data
      }
      return await new Promise(resolve => resolve(task))
    }
  }
  return new DbCreateData()
}

const makeSut = (): {
  createTask: CreateTask
  createDataStub: CreateData
} => {
  const createDataStub = makeCreateData()
  const createTask: CreateTask = new CreateTask(createDataStub)
  return {
    createTask,
    createDataStub
  }
}

describe('CreateTask tests', () => {
  test('Should call create data with correct domain name and data', async () => {
    const {
      createTask: sut,
      createDataStub
    } = makeSut()
    const createSpy = jest.spyOn(createDataStub, 'create')
    const taskInput: CreateTaskInput = { title: 'valid title' }
    await sut.create(taskInput)
    expect(createSpy).toHaveBeenCalledWith({
      domainName: 'task',
      data: { title: 'valid title' }
    })
  })
})
