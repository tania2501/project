import { Component, EventEmitter, Output } from '@angular/core';

export interface Grade {
  math: number
  literary: number
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()
  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputGrade)
  };
  inputGrade = ''

}
