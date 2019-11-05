import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  // hack for right now
  logout()
  {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

}
