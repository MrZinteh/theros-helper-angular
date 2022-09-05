import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BackendService} from "./shared/services/backend.service";
import {NavBarService} from "./shared/services/nav-bar.service";
import { NavbarComponent } from './navbar/navbar.component';
import {SharedModule} from "./shared/shared.module";
import {NameGeneratorModule} from "./name-generator/name-generator.module";
import {NameViewerModule} from "./name-viewer/name-viewer.module";
import {PlayersModule} from "./players/players.module";
import {ImportantNpcsModule} from "./important-npcs/important-npcs.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SharedModule,
    NameGeneratorModule,
    NameViewerModule,
    PlayersModule,
    ImportantNpcsModule
  ],
  providers: [
    BackendService,
    NavBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
