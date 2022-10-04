import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { AuthService } from './auth/services/auth.service';

import { HomePagosComponent } from './pages/pagos/home-pagos/home-pagos.component';
import { ListComponent } from './pages/pagos/list/list.component';
import { NewComponent } from './pages/pagos/new/new.component';
import { DetailsComponent } from './pages/pagos/details/details.component';
import { EditComponent } from './pages/pagos/edit/edit.component';

import { HomeProfComponent } from './pages/profesionales/home-prof/home-prof.component';
import { ListProfComponent} from './pages/profesionales/list-prof/list-prof.component';
import { NewProfComponent } from './pages/profesionales/new-prof/new-prof.component';
import { DetailsProfComponent } from './pages/profesionales/details-prof/details-prof.component';
import { EditProfComponent } from './pages/profesionales/edit-prof/edit-prof.component';
import { PagoFormComponent } from './shared/pago-form/pago-form.component';
import { ProfesionalFormComponent } from './shared/profesional-form/profesional-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent,
    
    HomePagosComponent,
    ListComponent,
    NewComponent,
    DetailsComponent,
    EditComponent,
    PagoFormComponent,

    HomeProfComponent,
    ListProfComponent,
    NewProfComponent,
    DetailsProfComponent,
    EditProfComponent,
    ProfesionalFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
