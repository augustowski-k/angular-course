import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements: number[] = [];

  processGameEvent(num: number) {
    this.elements.push(num);
  }
}
