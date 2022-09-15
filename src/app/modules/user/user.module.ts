import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { UserRoutingModule } from './user-routing.module';
import { MyTeamComponent } from './my-team/my-team.component';
import { ProfilComponent } from './profil/profil.component';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';
import { MaterialModule } from '../../core/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MyTeamComponent, ProfilComponent, MyPokedexComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MaterialModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
})
export class UserModule {}
