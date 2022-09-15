import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NamesComponent} from "./names/names.component";
import {GodsComponent} from "./gods/gods.component";
import {ImportantNpcsComponent} from "./important-npcs/important-npcs.component";
import {PlayersComponent} from "./players/players.component";

const routes: Routes = [
  { path: 'NameGenerator', component: NamesComponent },
  { path: 'Gods', loadChildren: () => import('./gods/gods-routing.module').then(m => m.GodsRoutingModule) },
  { path: 'ImportantNPCs', component: ImportantNpcsComponent },
  { path: 'Players', component: PlayersComponent },
];

const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  // enableTracing: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routingConfiguration)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
