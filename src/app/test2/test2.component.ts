import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddValueService } from '../services/add.service';
import { BeautyLoggerService } from '../services/beauty.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  value$ = new Observable();
  constructor(private valueService: AddValueService, private beautyService: BeautyLoggerService) { }
  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }
  addValueHandler() {
    this.valueService.add()
    this.beautyService.log('add value', 'success')
  }
}
