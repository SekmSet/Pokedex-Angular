import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MyTeamComponent } from './my-team/my-team.component';
import { ProfilComponent } from './profil/profil.component';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';


@NgModule({
  declarations: [
    MyTeamComponent,
    ProfilComponent,
    MyPokedexComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],

})
export class UserModule { }
