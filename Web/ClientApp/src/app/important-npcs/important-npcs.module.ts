import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantNpcsComponent } from './important-npcs.component';



@NgModule({
    declarations: [
        ImportantNpcsComponent
    ],
    exports: [
        ImportantNpcsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ImportantNpcsModule { }
