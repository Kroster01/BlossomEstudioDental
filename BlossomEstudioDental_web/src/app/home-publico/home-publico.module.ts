import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePublicoComponent } from './home-publico.component';
import { HomePublicoRoutingModule } from './home-publico-routing.module';

@NgModule({
  declarations: [
    HomePublicoComponent
  ],
  imports: [
    CommonModule,
    HomePublicoRoutingModule
  ]
})
export class HomePublicoModule { }
