import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AppRoutingModule} from "../../app-routing.module";
import {PokemonModule} from "../../modules/pokemon/pokemon.module";

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    MatIconModule,
    PokemonModule
  ],
  exports: [
    NavBarComponent,
    MatIconModule
  ]
})
export class NavigationModule { }
