import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { Taskservice } from './task.service';

@Module({
  providers: [TaskResolver, Taskservice],
  exports: [Taskservice],
})
export class TaskModule {}