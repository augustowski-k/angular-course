import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = false;
  clicks = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.clicks.push(new Date());
  }
}
