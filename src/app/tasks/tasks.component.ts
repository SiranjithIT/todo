import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SideAddTaskComponent } from '../side-add-task/side-add-task.component';
import { TaskService } from '../task.service';
import { Task } from '../task.service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  removeTask(index: number) {
    console.log(`Removing task at index: ${index}`);
    if (index < 0 || index >= this.tasks.length) {
      console.error('Index out of bounds');
      return;
    }
    this.tasks = this.taskService.removeTask(index);
    console.log(`Task at index ${index} removed successfully.`);
  }

  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

  changeStatus(index: number) {
    if (index < 0 || index >= this.tasks.length) {
      console.error('Index out of bounds');
      return;
    }
    this.tasks = this.taskService.updateStatus(index);
  }
}
