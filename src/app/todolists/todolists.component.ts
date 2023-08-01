import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.css']
})
export class TodolistsComponent implements OnInit {
  todo: Todo[] = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.http.get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
      withCredentials: true, headers: {
        'api-key': '9ea0b65b-29dc-4d3d-81d5-a42faf1e493e'
      }
    }).subscribe (res => {
      this.todo = res;
    })
  }
}
