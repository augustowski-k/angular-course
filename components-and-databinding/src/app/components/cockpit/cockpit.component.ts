import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName) {
    this.serverCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverName) {
    this.blueprintCreated.emit({
      blueprintName: serverName,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }
}
