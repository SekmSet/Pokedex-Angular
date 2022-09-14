import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
  },
  {
    path: 'my-team',
    component: MyTeamComponent,
  },
  {
    path: 'my-pokedex',
    component: MyPokedexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
