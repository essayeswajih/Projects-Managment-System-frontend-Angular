import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { Task } from '../interfaces/task';

const apiBaseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProjectAndTasksService {

  private apiServerUrl = `${apiBaseUrl}/projects/adminuser/`;
  private  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authService.getToken()}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private authService:AuthService) {}

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}create`, project, { headers: this.headers });
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.patch<Project>(`${this.apiServerUrl}update`, project, { headers: this.headers });
  }

  getAllProjectsByUserId(userId: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}users/${userId}`, { headers: this.headers });
  }

  getProjectById(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiServerUrl+projectId}`, { headers: this.headers });
  }

  deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}delete/${projectId}`, { headers: this.headers });
  }

  getAllTasksByProjectId(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}tasks/${projectId}`, { headers: this.headers });
  }

  getAllTasksForToday(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiServerUrl}tasks/today/${userId}`, { headers: this.headers });
  }
}
