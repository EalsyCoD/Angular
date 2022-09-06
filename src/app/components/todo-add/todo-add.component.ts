import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ITodo } from 'src/app/models/product';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITodo> = new EventEmitter();

  name: string | undefined;
  completed: boolean | undefined;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a Task');
      return;
    }
    const newTask = {
      name: this.name,
      completed: false,
    };

    this.onAddTask.emit(newTask);
    console.log(newTask);

    this.name = '';
  }
}
