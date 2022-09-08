import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  userEmail = new FormControl('');

  constructor(public authSVC: AuthService, private router: Router) { }

  async onReset(): Promise<void> {
    try {
      const email = this.userEmail.value;
      await this.authSVC.resetPassword(email);
      window.alert('Se envió, favor revisar tu correo.');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }

  }
}
