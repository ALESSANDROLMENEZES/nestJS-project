import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';

@Injectable()
export class TasksService {
 
 // getTasks():Task[] {
 //  return this.tasks
 // }

 // getTasksWithFilter(filterTaskDto: FilterTaskDto): Task[]{
 //  const {status, search } = filterTaskDto;
 //  let tasks = this.getTasks();
 //  if (status) {
 //   tasks = tasks.filter(task => task.status === status);
 //  }

 //  if (search) {
 //   tasks = tasks.filter(task => task.description.includes(search) || task.title.includes(search))
 //  }

 //  return tasks;
 // }

 // getTaskById(id: string): Task{
 //  const foundTask = this.tasks.find(task => task.id === id);
 //  if (!foundTask) {
 //   throw new NotFoundException(`Task id ${id} not found`);
 //  }
 //  return foundTask;
 // }
 
 // createTask(createTaskDto: CreateTaskDto): Task {
 //  const { title, description } = createTaskDto;
 //  const task: Task = {
 //   id: uuid(),
 //   title,
 //   description,
 //   status:TaskStatus.OPEN
 //  }
 //  this.tasks.push(task);
 //  return task;
 // }

 // deleteTaskById(id: string): Task{
 //  const foundTask = this.getTaskById(id);
 //  this.tasks = this.tasks.filter(task => task.id !== foundTask.id)
 //  return foundTask;
 // }

 // updateTastStatus(id:string, status:TaskStatus): Task{
 //  const task = this.getTaskById(id)
 //  task.status = status;
 //  return task;
 // }
 
}
