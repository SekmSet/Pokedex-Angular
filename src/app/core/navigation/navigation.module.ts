import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import {AppRoutingModule} from "../../app-routing.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
  ],
  exports: [
    NavBarComponent,
    MatIconModule
  ]
})
export class NavigationModule { }
