import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = "http://localhost:8080/auth/";
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
