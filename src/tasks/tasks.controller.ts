import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

 @Controller('tasks')
 export class TasksController {
 constructor(private taskService: TasksService) { }
 
 @Get()
 getAllTasks(@Query(ValidationPipe) filterTaskDto: FilterTaskDto) {
  return this.taskService.getTasks(filterTaskDto);
 }
 
 @Get('/:id')
 getTaskById(@Param('id') id:string): Promise<Task>{
  return this.taskService.getTaskById(id);
 }
 
 @Delete('/:id')
 deleteTaskById(@Param('id') id: string){
  return this.taskService.deleteTaskById(id);
 }
 
 @Post()
 @UsePipes(ValidationPipe)
 createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
  return this.taskService.createTask(createTaskDto);
 }
 
 @Patch('/:id/status')
 updateTaskStatus(
  @Param('id') id:string,
  @Body('status', TaskStatusValidationPipe) status:TaskStatus
  ): Promise<Task>{
   return this.taskService.updateTastStatus(id, status);
  }
 }
 