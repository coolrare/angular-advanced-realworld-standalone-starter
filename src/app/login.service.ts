import { UserLoginInfo } from './interfaces/login-info';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInfo } from './interfaces/user-info';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient = inject(HttpClient);

  login(userLogin: UserLoginInfo) {
    return this.httpClient.post<UserInfo>(`${environment.apiUrl}/api/users/login`, {user: userLogin});
  }
}
