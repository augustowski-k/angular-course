import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Tabs } from '../../misc/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigationOccured = new EventEmitter<Tabs>();

  TabEnum = Tabs;

  constructor() { }

  ngOnInit() {
  }

  navigate(tab: Tabs) {
    this.navigationOccured.emit(tab);
  }
}
