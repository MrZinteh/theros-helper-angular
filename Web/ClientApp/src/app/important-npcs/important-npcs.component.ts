import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-important-npcs',
  templateUrl: './important-npcs.component.html',
})
export class ImportantNpcsComponent implements OnInit {

  expanded: {[key: string]: boolean} = {
    "Prodotis": false,
    "Melantha": false,
    "Anni": false,
    "Brutus": false,
    "Brimaz": false,
  }

  constructor() { }

  ngOnInit(): void {
  }

  onExpand(name: string) {
    this.expanded[name] = !this.expanded[name];
  }

}
