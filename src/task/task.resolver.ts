import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { GqlAuthGuard } from '../auth/jwt-auth.guard';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { name: 'tasks' })
  async findAll(
    @Args('userId', { type: () => Int, nullable: true }) userId?: number,
  ): Promise<Task[]> {
    return this.taskService.getTasks(userId);
  }

  @Query(() => Task, { name: 'task', nullable: true })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Mutation(() => Task, { name: 'createTask' })
  @UseGuards(GqlAuthGuard)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => Task, { name: 'updateTask' })
  @UseGuards(GqlAuthGuard)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return this.taskService.updateTask(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => Boolean, { name: 'removeTask' })
  @UseGuards(GqlAuthGuard)
  async removeTask(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.taskService.removeTask(id);
  }
}