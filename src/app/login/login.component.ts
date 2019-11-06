import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authObservable: Observable<any>;
  authObserver: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.authObservable = afAuth.user;
    this.authObserver = this.authObservable.subscribe(function() { router.navigate(['chat'])});   // when new user is emitted from auth, call router nav
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  onSubmit(form: any) {
    this.login(form.userName, form.pw);
  }

  login(user: string, pass: string) {
    this.afAuth.auth.signInWithEmailAndPassword(user, pass)
      .catch( function(error) {
        console.log(error);
      })
  }

  ngOnInit() {
    // type error when subscribing here, so left it in ctor
  }

  ngOnDestroy() {
    // unsubscribe from 
    this.authObserver.unsubscribe();
  }

}
