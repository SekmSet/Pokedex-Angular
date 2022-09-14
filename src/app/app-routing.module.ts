import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { animation: 'HomePage' }
  },
  {
    path: 'profil',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    data: { animation: 'togglePage' }
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule),
    data: { animation: 'togglePage' }
  },
  {
    path: '**', redirectTo: '/404'
  },
  {
    path: '404',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule),
    data: { animation: 'togglePage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
