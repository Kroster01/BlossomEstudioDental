import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list', loadChildren: () => import('../pages/blossom/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'new', loadChildren: () => import('../pages/blossom/new/new.module').then(m => m.NewModule)
  },
  {
    path: 'details', loadChildren: () => import('../pages/blossom/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'edit', loadChildren: () => import('../pages/blossom/edit/edit.module').then(m => m.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
