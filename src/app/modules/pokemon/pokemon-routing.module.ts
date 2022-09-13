import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ViewAllComponent } from './views/view-all/view-all.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAllComponent,
  },
  {
    path: 'detail/:name',
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
