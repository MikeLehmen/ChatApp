import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { LoginGuard } from './login/login-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  {
    path: 'chat', 
    component: ChatPageComponent,
    canActivate: [ LoginGuard ]
  },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
