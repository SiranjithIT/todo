import { Injectable } from '@angular/core';

export interface Task {
  Task: string;
  Status: string;
  Created: string;
  Deadline: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  removeTask(index: number) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
    return [...this.tasks];
  }

  updateStatus(index: number){
    this.tasks[index].Status = this.tasks[index].Status === 'Pending' ? 'Completed' : 'Pending';

    return [...this.tasks];
  }
}
