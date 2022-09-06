import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoAddComponent,
    ButtonComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
