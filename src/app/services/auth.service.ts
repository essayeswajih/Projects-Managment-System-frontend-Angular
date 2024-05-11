import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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
      return this.http.get<User>(`${this.apiServerUrl}/admin/findByEmail/${email}`, { headers: this.headers })
        .pipe(
          catchError(error => {
            console.error('Error fetching user:', error);
            return of(null); // Return an Observable that emits null
          })
        );
    } else {
      return of(null); // Return an Observable that emits null
    }
  }

  isAdmin(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => user !== null && user.role === "ADMIN")
    );
  }

  getUserId(): Observable<number | null> {
    return this.getUser().pipe(
      map(user => user ? user.id : null)
    );
  }

  getRole(): Observable<string | null> {
    return this.getUser().pipe(
      map(user => user ? user.role : null)
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => user !== null)
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.updateHeaders();
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
