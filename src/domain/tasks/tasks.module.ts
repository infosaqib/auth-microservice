import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  exports: [TasksService],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
