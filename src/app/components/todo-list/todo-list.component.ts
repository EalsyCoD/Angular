import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

import { TaskService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo: ITodo[] = [];
  @Output() onDeleteTask: EventEmitter<ITodo> = new EventEmitter();
  @Output() onCompletedTask: EventEmitter<ITodo> = new EventEmitter();

  constructor(private todoService: TaskService) {}
  ngOnInit(): void {
    this.todoService.getTasks().subscribe((tasks) => (this.todo = tasks));
  }

  addTask(task: ITodo) {
    this.todoService.addTask(task).subscribe((task) => this.todo.push(task));
  }
  onDelete(task: ITodo) {
    this.todoService
      .delTask(task)
      .subscribe(
        () => (this.todo = this.todo.filter((item) => task.id !== item.id))
      );
  }
  toggleTask(task: ITodo) {
    task.completed = !task.completed;
    this.todoService.updateTask(task).subscribe();
  }
}
