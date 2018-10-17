import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}