import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
const BASE_URL = `${environment.apiBaseUrl}/auth/`;
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private http: HttpClient) {}
  register(signupRequest:any) : Observable<any>{
    return this.http.post(BASE_URL+'signup', signupRequest)
  }
  login(signinRequest:any) : Observable<any>{
    return this.http.post(BASE_URL+'signin', signinRequest)
  }
}
