import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/print')
  getTasks(): object {
    return this.tasksService.printHello();
  }
  @Get('/create')
  newTasks(): object {
    return this.tasksService.createTasks();
  }
}
