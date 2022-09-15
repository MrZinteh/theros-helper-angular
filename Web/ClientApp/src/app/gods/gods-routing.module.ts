import { NgModule } from '@angular/core';
import {GodsModule} from "./gods.module";
import {RouterModule, Routes} from "@angular/router";
import {GodsComponent} from "./gods.component";

const routes: Routes = [
  { path: '', component: GodsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    GodsModule,
    RouterModule.forChild(routes)
  ]
})
export class GodsRoutingModule { }
