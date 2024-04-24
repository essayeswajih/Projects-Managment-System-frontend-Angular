import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environment';
const apiBaseUrl = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = `${apiBaseUrl}/users`;

  private  headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json'
    });

  constructor(private http: HttpClient, private authService:AuthService) {}

  public getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiServerUrl}/admin/all`,{ headers: this.headers });
  }
  public addUser( user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/admin/add`, user,{ headers: this.headers });
  }
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/admin/update`, user,{ headers: this.headers });
  }
  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/admin/delete/${userId}`, { headers: this.headers });
  }
  public getUserById(userId : Number ): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/admin/find/${userId}`, { headers: this.headers });
  }
  public getUserByEmail(userId : String ): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/admin/findByEmail/${userId}`, { headers: this.headers });
  }
  public getUser(userId : String ): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/admin/find/${userId}`, { headers: this.headers });
  }
}
