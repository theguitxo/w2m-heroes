import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('./pages/edit-hero/edit-hero.module').then(m => m.EditHeroModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list-hero/list-hero.module').then(m => m.ListHeroModule)
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
