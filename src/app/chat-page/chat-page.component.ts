import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  chatActivated: boolean;

  constructor(private afAuth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
    this.chatActivated = false;
  }

  // hack for right now
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  activateChat(): void {
    this.chatActivated = true;
  }

}
