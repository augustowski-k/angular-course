import {
  Component,
  OnInit
} from '@angular/core';
import { Tabs } from './misc/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  TabEnum = Tabs;
  openedTab: Tabs;

  ngOnInit() {
    if (!this.openedTab) {
      this.openedTab = Tabs.RecipeBook;
    }
  }

  onNavigate(tab: Tabs) {
    this.openedTab = tab;
  }
}
