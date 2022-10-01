import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePagosComponent } from './home-pagos.component';

const routes: Routes = [{ path: '', component: HomePagosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePagosRoutingModule { }