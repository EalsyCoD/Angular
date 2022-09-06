import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ITodo } from 'src/app/models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.apiUrl, httpOptions);
  }

  addTask(task: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.apiUrl, task, httpOptions);
  }
}
