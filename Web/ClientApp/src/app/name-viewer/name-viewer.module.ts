import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameViewerComponent } from './name-viewer.component';



@NgModule({
  declarations: [
    NameViewerComponent
  ],
  exports: [
    NameViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NameViewerModule { }
