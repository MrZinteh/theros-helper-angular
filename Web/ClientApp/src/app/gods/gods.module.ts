import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodsComponent } from './gods.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        GodsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
    ]
})
export class GodsModule { }
