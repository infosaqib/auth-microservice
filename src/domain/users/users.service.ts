import { TasksService } from './../tasks/tasks.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly service: TasksService) {}

  printTasks(): object {
    return this.service.createTasks();
  }
}
