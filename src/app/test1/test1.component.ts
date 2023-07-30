import { Component } from "@angular/core";
import { Grade } from "./child/child.component";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})

export class TestComponent {
  grades: string[] = ['math: 5', 'literary: 3'];

  getGrade(grade: string) {
    this.grades.push(grade)
  }
}
