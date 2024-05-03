import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment';
const apiBaseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = `${apiBaseUrl}/users`;
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.updateHeaders();
  }

  private updateHeaders() {
    const token = this.getToken();
    if (token) {
      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    }
  }

  getUser(): Observable<User | null> {
    let email = this.getUserEmail();
    if (email !== null) {
      return this.http.get<User>(`${this.apiServerUrl}/admin/findByEmail/${email}`, { headers: this.headers });
    } else {
      return null;
    }
  }

  isAdmin(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => user !== null && user.role === "ADMIN")
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): Observable<Number> {
    return this.getUser().pipe(
      map(user => user ? user.id : null)
    );
  }

  getRole(): Observable<string | null> {
    return this.getUser().pipe(
      map(user => user ? user.role : null)
    );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.updateHeaders();
  }

  isLoggedIn(): boolean{
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.updateHeaders();
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