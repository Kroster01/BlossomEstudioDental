import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProfComponent } from './home-prof.component';

const routes: Routes = [{ path: '', component: HomeProfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeProfRoutingModule { }