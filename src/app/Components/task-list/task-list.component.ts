import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() 
  tasks: Task[] = [

  ];

  @Output()
  taskCompletada = new EventEmitter<number>();

  @Output()
  taskEliminada = new EventEmitter<number>();

  completarTarea(idTask: number) {
    this.taskCompletada.emit(idTask);
  }

  eliminarTarea(idTask: number) {
    this.taskEliminada.emit(idTask);
  }

}
