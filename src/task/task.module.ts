import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], 
  providers: [TaskResolver, TaskService],
  exports: [TaskService], 
})
export class TaskModule {}
