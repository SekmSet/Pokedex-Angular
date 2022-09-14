import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { IndexComponent } from './index/index.component';
import {MaterialModule} from "../../core/material/material.module";
import { PokemonNotFoundComponent } from './pokemon-not-found/pokemon-not-found.component';

@NgModule({
  declarations: [
    IndexComponent,
    PokemonNotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MaterialModule
  ]
})
export class NotFoundModule { }
