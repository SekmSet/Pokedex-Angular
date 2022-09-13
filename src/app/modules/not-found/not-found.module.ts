import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { IndexComponent } from './index/index.component';
import {MaterialModule} from "../../core/material/material.module";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MaterialModule
  ]
})
export class NotFoundModule { }
