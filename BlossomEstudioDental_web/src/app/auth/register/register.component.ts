import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
    }
  );
  constructor(public authSVC: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    const {email, password} = this.formulario.value;
    try {
      console.log('Form -> ' + JSON.stringify(this.formulario.value));
      const user = await this.authSVC.regiter(email, password);
      if (user) {
        this.router.navigate(['/verification-email']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
