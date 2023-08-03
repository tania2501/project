import { BeautyLoggerService } from './beauty.service';
import { BehaviorSubject, EMPTY, Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Item, ResponseTodo, Todo } from '../todolists/todolists.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  httpObj = {
    withCredentials: true,
    headers: {
      'api-key': '9ea0b65b-29dc-4d3d-81d5-a42faf1e493e'
    }
  }
  constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) { }
  getToodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpObj).pipe(catchError(this.errorHandler.bind(this))).
      subscribe(todos => {
        this.todos$.next(todos)
      })
  }
  createTodo(title: string) {
    this.http.post<ResponseTodo<{ item: Item }>>('https://social-network.samuraijs.com/api/1.1/todo-lists', { title }, this.httpObj).pipe(
      catchError(this.errorHandler.bind(this)),
      map((res) => {
        return [res.data.item, ...this.todos$.getValue()]
      })).subscribe((todos) => {
        this.todos$.next(todos)
      })
  }
  deleteTodo(id: string) {
    this.http.delete<ResponseTodo>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, this.httpObj).pipe(
      catchError(this.errorHandler.bind(this)),
      map(() => {
        return this.todos$.getValue().filter(t => t.id !== id)
      })).subscribe(todos => {
        this.todos$.next(todos)
      })
  }
  private errorHandler(err: HttpErrorResponse) {
    this.beautyLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
