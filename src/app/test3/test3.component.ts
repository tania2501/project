import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AddValueService } from '../services/add.service';
import { BeautyLoggerService } from '../services/beauty.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  value$ = new Observable();
  constructor(private valueService: AddValueService, private beautyService: BeautyLoggerService) { }
  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }
 decrementValueHandler() {
    this.valueService.dec()
    this.beautyService.log('decrement value', 'warning')
  }
}
