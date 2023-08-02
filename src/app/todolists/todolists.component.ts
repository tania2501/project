import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

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
  todo: Todo[] = []
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }
  changeTitle(title: Event) {
    this.value = (title.currentTarget as HTMLInputElement).value
  }

  getTodos() {
    this.todosService.getToodos().subscribe((res: Todo[]) => {
      this.todo = res
    })
  }

  createTodo() {
    const title = this.value
    this.todosService.createTodo(title).subscribe((res) => {
      const newTodo = res.data.item
      this.todo.unshift(newTodo)
    })
    this.value = ''
  }
  deleteTodo(id: string) {
    this.todosService.deleteTodo(id).subscribe(() => {
      this.todo = this.todo.filter(todo => todo.id != id)
    })
  }
}
