import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonNotFoundComponent } from '../not-found/pokemon-not-found/pokemon-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { ViewAllComponent } from './views/view-all/view-all.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAllComponent,
  },
  {
    path: 'detail/:name',
    component: DetailComponent,
    data: { animation: 'queryingPage' }
  },
  {
    path: 'detail/not-found/404',
    component: PokemonNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
