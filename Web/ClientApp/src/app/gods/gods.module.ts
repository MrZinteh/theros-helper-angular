import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GodsComponent } from './gods.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { GodDetailsComponent } from './details/god-details.component';

@NgModule({
    declarations: [
        GodsComponent,
        GodDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
    ]
})
export class GodsModule { }
