import { NgModule } from '@angular/core';
import {GodsModule} from "./gods.module";
import {RouterModule, Routes} from "@angular/router";
import {GodsComponent} from "./gods.component";
import {GodDetailsComponent} from "./details/god-details.component";

const routes: Routes = [
  { path: '', component: GodsComponent },
  { path: ':god', component: GodDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    GodsModule,
    RouterModule.forChild(routes)
  ]
})
export class GodsRoutingModule { }
