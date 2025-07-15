import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideAddTaskComponent } from './side-add-task/side-add-task.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideAddTaskComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
