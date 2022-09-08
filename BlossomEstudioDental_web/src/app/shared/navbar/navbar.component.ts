import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent {

  public user$: Observable<any> = this.authSVC.afAuth.user;

  constructor(public authSVC: AuthService,
    private router: Router) { }

  async onLogOut() {
    try {
      await this.authSVC.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
    
  }
}
