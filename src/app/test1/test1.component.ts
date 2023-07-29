import { Component } from "@angular/core";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})

export class TestComponent {
  title = 'Test Title'
  text = ''

  changeTitle() {
    this.title = 'New Title'
  }
  changeText(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
}
