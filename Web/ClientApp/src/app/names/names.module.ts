import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesComponent } from './names.component';
import {NameGeneratorComponent} from "./name-generator/name-generator.component";
import {NameViewerComponent} from "./name-viewer/name-viewer.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NamesComponent,
    NameGeneratorComponent,
    NameViewerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class NamesModule { }
