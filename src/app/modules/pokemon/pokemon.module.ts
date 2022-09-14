import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule} from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ViewAllComponent } from './views/view-all/view-all.component';
import {MaterialModule} from "../../core/material/material.module";
import { SearchComponentComponent } from './components/search-component/search-component.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DetailComponent,
    ViewAllComponent,
    SearchComponentComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  exports : [
    SearchComponentComponent
  ]
})
export class PokemonModule { }
