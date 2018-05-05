import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter<number>();

  index = 0;
  intervalID;

  constructor() { }

  ngOnInit() {
  }

  onStartBtnClicked() {
    this.intervalID = setInterval(
      () => this.gameEvent.emit(this.index++),
      1000);
  }

  onStopBtnClicked() {
    clearInterval(this.intervalID);
  }
}
