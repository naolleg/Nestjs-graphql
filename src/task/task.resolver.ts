import { Resolver, Query } from '@nestjs/graphql';
import { Task } from './task.entity';
import { Taskservice } from './task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: Taskservice) {}

  @Query(() => [Task], { name: 'tasks' })
  async findAll(): Promise<Task[]> {
    return this.taskService.findall();
  }
}