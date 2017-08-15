import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import * as firebase from 'firebase';
import {User} from '../models/user';

@Injectable()
export class UserService implements CanActivate {

  userLoggedIn = false;
  authUser: any;
  loggedInUser: string;

  constructor(private router: Router) {
    // initialize fire-base configurations
    firebase.initializeApp({
      apiKey: 'AIzaSyBGXtrz-W7ZIdEwVlkR289AR9bU-zAUFoU',
      authDomain: 'angular-firebase-140c0.firebaseapp.com',
      databaseURL: 'https://angular-firebase-140c0.firebaseio.com',
      projectId: 'angular-firebase-140c0',
      storageBucket: 'angular-firebase-140c0.appspot.com',
      messagingSenderId: '1066772506511'
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.verifyLogin();
  }

  login(user: User): void {
    firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        alert(`${error.message} Unable to login. Try again!`);
      });
  }

  logout() {
    this.userLoggedIn = false;
    firebase.auth()
      .signOut()
      .then(function () {
        alert(`You have been logged Out!`);

      }, function (error) {
        alert(`${error.message} Unable to logout. Try again!`);
      });
  }

  verifyLogin(): boolean {
    if (this.userLoggedIn) {
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }

  register(user: User): void {
    firebase.auth()
      .createUserWithEmailAndPassword(user._email, user._password)
      .catch(function (error) {
        alert(`${error.message} Please try again!`);
      });
  }

  verifyUser(): void {
    this.authUser = firebase.auth().currentUser;
    if (this.authUser) {

      alert(`Welcome ${this.authUser.email}`);

      this.loggedInUser = this.authUser.email;
      this.userLoggedIn = true;
      this.router.navigate(['/admin']);
    }
  }

}
