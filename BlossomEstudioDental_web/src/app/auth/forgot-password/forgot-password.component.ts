import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  formulario: FormGroup = new FormGroup(
    {
      userEmail: new FormControl('')
    }
  );

  constructor(
    private authSVC: AuthService,
    private router: Router) { }

  async onReset(): Promise<void> {
    try {
      const { userEmail } = this.formulario.value;
      let responseForgetPassWord = await this.authSVC.resetPassword(userEmail);
      console.log(JSON.stringify(responseForgetPassWord));
      window.alert('Se envió, favor revisar tu correo.');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
