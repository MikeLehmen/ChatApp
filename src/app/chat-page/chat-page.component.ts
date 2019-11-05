import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  chatWindowActive: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.chatWindowActive = false;
  }

  ngOnInit() {
  }

  // hack for right now
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  toggleChat() {
    console.log("before click: " + this.chatWindowActive);
    this.chatWindowActive = !this.chatWindowActive;
  }

}
