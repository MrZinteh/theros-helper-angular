import { Component } from '@angular/core';
import {NavBarService} from "./shared/services/nav-bar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  selectedTab = "Name Generator";

  constructor(
    private navBarService: NavBarService
  ) {
    this.navBarService.selectedTabSubject.subscribe({
      next: value => {
        this.selectedTab = value;
      }
    })
  }
}
