import { Component } from '@angular/core';
import {BackendService, GreekName} from "../shared/services/backend.service";

@Component({
  selector: 'app-name-viewer',
  templateUrl: './name-viewer.component.html',
})
export class NameViewerComponent {

  _names!: GreekName[];
  _expanded: {[key: string]: boolean} = {};



  constructor(
    private backendService: BackendService
  ) {
    this.loadGreekNames()
    this.backendService.recentlyGenerated.subscribe({
      next: value => {
        if(value) {
          this.loadGreekNames()
        }
      }
    })
  }

  get names() { return this._names }

  get expanded() { return this._expanded }

  onExpand(name: string) {
    this._expanded[name] = !this._expanded[name];
  }

  onRemove(name: string) {
    this.backendService.removeName(name).subscribe(() => this.loadGreekNames());
  }

  loadGreekNames() {
    this.backendService.getNames().subscribe({
      next: value => {
        this._names = value;
        value.map((name) => this._expanded[name.name] = false)
      },
      error: err => console.log(err)
    })
  }

}
