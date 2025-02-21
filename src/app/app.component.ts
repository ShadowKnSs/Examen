import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task.interface';
import { TaskListComponent } from "./Components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  tasks: Task[] = [
    { id: 1, title: 'Hacer Examen', completed: true },
    { id: 2, title: 'Tarea de Angular', completed: false},
    { id: 3, title: 'Ir al super', completed: false },
    { id: 4, title: 'Leer libro', completed: false },
    { id: 5, title: 'Lavar los trastes', completed: false },
    { id: 6, title: 'Lavar la ropa', completed: false },
    {id: 7, title: 'Tirar la basura', completed: false },
    { id: 8, title: 'Pasear al perro', completed: false },
    { id: 9, title: 'Ir al gimnasio', completed: false },
    { id: 10, title: 'Dormir', completed: false }

  ];

  completarTarea(idTask: number) {
    const task = this.tasks.find(task => task.id === idTask);
    if (task) {
      task.completed = true;
    }
  }

  eliminarTarea(idTask: number) {
    this.tasks = this.tasks.filter(task => task.id!== idTask);
  }
}
