import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  printHello(): object {
    return { status: 'OK' };
  }
  createTasks(): object {
    return { message: 'Tasks created' };
  }
}
