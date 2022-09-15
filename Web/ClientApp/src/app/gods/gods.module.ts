import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodsComponent } from './gods.component';



@NgModule({
    declarations: [
        GodsComponent
    ],
    exports: [
        GodsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GodsModule { }
