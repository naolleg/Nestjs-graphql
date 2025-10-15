
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class Taskservice {
  async findall(): Promise<Task[]> {
        const newTask = new Task();
        newTask.id = 1;
        newTask.title = "Sample Task";
        newTask.description = "This is a sample task description.";
        newTask.status = "pending";
        return [newTask];
    }
}