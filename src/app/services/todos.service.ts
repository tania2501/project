import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Item, ResponseTodo, Todo } from '../todolists/todolists.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  httpObj = {
    withCredentials: true,
    headers: {
      'api-key': '9ea0b65b-29dc-4d3d-81d5-a42faf1e493e'
    }
  }
  constructor(private http: HttpClient){}
  getToodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpObj)
  }
  createTodo(title: string) : Observable<ResponseTodo<{item: Item}>>{
    return this.http.post<ResponseTodo<{item: Item}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, this.httpObj)
  }
  deleteTodo(id: string): Observable<ResponseTodo> {
    return this.http.delete<ResponseTodo>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, this.httpObj)
  }
}
