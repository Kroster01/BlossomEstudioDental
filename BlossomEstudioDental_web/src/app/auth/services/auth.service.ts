import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;
  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    let result;
    try {
      result = await this.afAuth.signInWithEmailAndPassword(email, password);
      //return result;
    }
    catch (error) {
      console.log(error);
    }
    return result;
  }

  async regiter(email: string, password: string) {
    let result;
    try {
      result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    }
    catch (error) {
      console.log(error);
    }
    return result;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error);
    }

  }

  async getCurrentUser() {
    let result;
    try {
      result = await this.afAuth.authState.pipe(first()).toPromise();
    }
    catch (error) {
      console.log(error);
    }
    return result;
  }

}
