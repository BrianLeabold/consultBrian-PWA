import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  loggedIn() {
    return !!this.localStorage.getItem('token');
  }

  logoutUser() {
    this.localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  getToken() {
    return this.localStorage.getItem('token');
  }
}
