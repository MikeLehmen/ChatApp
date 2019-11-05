import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observer } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  items: Observable<any>;
  user: Observable<any>;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { 
    this.items = db.list('testList').valueChanges();
    this.user = afAuth.user;
    this.user.subscribe(function() { router.navigate(['chat'])});   // when new user is emitted from auth, call router nav
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  onSubmit(form: any) {
    console.log(form);
    this.login(form.userName, form.pw);
    
    
    // doesn't wait for authentication call to come back
    //this.router.navigate(['chat']);
  }

  login(user: string, pass: string) {
    this.afAuth.auth.signInWithEmailAndPassword(user, pass)
      .catch( function(error) {
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
