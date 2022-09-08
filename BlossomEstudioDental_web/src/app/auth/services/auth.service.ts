import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;
  constructor(public afAuth: AngularFireAuth) { }

  async resetPassword(email: string): Promise<void> {
    let result;
    try {
      result = await this.afAuth.sendPasswordResetEmail(email);
      this.sendVerificationEmail();
    }
    catch (error) {
      console.log(error);
    }
    return result;
  }

  async sendVerificationEmail(): Promise<void> {
    let currentUser = await this?.afAuth?.currentUser;
    return currentUser?.sendEmailVerification();
  }

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
      this.sendVerificationEmail();
    }
    catch (error) {
      console.log(error);
    }
    return result;
  }

  async logout() {
    let result;
    try {
      let result = await this.afAuth.signOut();
    }
    catch (error) {
      console.log(error);
    }
    return result;
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
