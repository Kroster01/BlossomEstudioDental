import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailComponent } from '../auth/send-email/send-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homeP',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'homeP',
    loadChildren: () =>
      import('../home-publico/home-publico.module').then(m => m.HomePublicoModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'verification-email',
    component: SendEmailComponent
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('../auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'homepagos',
    loadChildren: () =>
      import('../pages/pagos/home-pagos/home-pagos.module').then(m => m.HomePagosModule)
  },
  {
    path: 'homeprof',
    loadChildren: () =>
      import('../pages/profesionales/home-prof/home-prof.module').then(m => m.HomeProfModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
