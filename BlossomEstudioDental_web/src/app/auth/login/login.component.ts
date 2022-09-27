import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {

  formulario: FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
    }
  );

  constructor(
    private authSVC: AuthService,
    private router: Router) { }

  async onLogin() {
    const {email, password} = this.formulario.value;
    try {
      console.log('Form -> ' + JSON.stringify(this.formulario.value));
      const user = await this.authSVC.login(email, password);
      if (user && user.user && user.user.emailVerified) {
        this.router.navigate(['/home']);
      } else if(user) {
        this.router.navigate(['/verification-email']);
      } else {
        this.router.navigate(['/register']);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
