import { Component } from '@angular/core';
import {NavBarService} from "../shared/services/nav-bar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(
    private navBarService: NavBarService
  ) {
  }

  get tabs() { return this.navBarService.tabs }

  get selectedTab() { return this.navBarService.selectedTab }

  selectTab(tab: string) {
    this.navBarService.selectTab(tab);
  }
}
