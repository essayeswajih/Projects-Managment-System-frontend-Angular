import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return this.getToken() !==null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
  getUserId(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  }
  getUserEmail(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwt_decode.jwtDecode(token);

      return decodedToken.sub;
    }
    return null;
  }
}


