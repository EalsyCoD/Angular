import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/product';

import { TaskService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo: ITodo[] = [];

  constructor(private todoService: TaskService) {}
  ngOnInit(): void {
    this.todoService.getTasks().subscribe((tasks) => (this.todo = tasks));
  }

  addTask(task: ITodo) {
    this.todoService.addTask(task).subscribe((task) => this.todo.push(task));
  }
}
