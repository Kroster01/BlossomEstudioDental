import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePublicoComponent } from './home-publico.component';

const routes: Routes = [{ path: '', component: HomePublicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePublicoRoutingModule { }
