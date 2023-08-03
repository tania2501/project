import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
export interface Item {
  id: string
  title: string,
  addedDate: string,
  order: number
}

export interface ResponseTodo<T = {}> {
  resultCode: number
  messages: [],
  data: T
}

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.css']
})
export class TodolistsComponent implements OnInit {
  value = ''
  todos$!: Observable<Todo[]>

  constructor(private todosService: TodosService) { }


  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }
  changeTitle(title: Event) {
    this.value = (title.currentTarget as HTMLInputElement).value
  }

  getTodos() {
    this.todosService.getToodos()
  }

  createTodo() {
    const title = this.value
    this.todosService.createTodo(title)
    this.value = ''
  }
  deleteTodo(id: string) {
    this.todosService.deleteTodo(id)
  }
}
