import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test1/test1.component';
import { ChildComponent } from './test1/child/child.component';
import { FormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { TodolistsComponent } from './todolists/todolists.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponent,
    Test2Component,
    Test3Component,
    TodolistsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
