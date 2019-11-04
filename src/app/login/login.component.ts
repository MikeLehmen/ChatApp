import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items: Observable<any>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.items = db.list('testList').valueChanges();
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.userName, this.pw)
      .catch( function(error) {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  onSubmit(form: any) {
    console.log(form);
    this.submitLogin(form.userName, form.pw);
  }

  submitLogin(user: string, pass: string) {
    this.afAuth.auth.signInWithEmailAndPassword(user, pass)
      .catch( function(error) {
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
