import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
