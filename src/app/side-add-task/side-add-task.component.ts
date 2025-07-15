import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { time } from 'console';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-side-add-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './side-add-task.component.html',
  styleUrl: './side-add-task.component.css'
})
export class SideAddTaskComponent {
  newTask:string = "";
  taskDeadline:string = "";

  constructor(private taskService: TaskService){}

  @Output() taskAdded = new EventEmitter<void>();

  addToList = ()=>{
    if(this.newTask != ""){
      this.taskService.addTask({
        Task: this.newTask,
        Status: "Pending",
        Created: new Date().toLocaleString(),
        Deadline: this.taskDeadline
      })
    }
    this.newTask = "";
    this.taskDeadline = "";

    this.taskAdded.emit();
  }
}
