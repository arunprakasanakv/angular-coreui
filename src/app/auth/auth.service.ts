import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  sendToken(token: string) {
    localStorage.setItem("userName", token)
  }
  getToken() {
    return localStorage.getItem("userName")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("userName");
    this.router.navigate(["login"]);
  }
}
