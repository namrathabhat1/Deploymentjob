import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DeploymentJob {
  id?: number;
  name: string;
  environment: 'DEV' | 'STAGING' | 'PROD';
  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED';
  timestamp?: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:8080/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<DeploymentJob[]> {
    return this.http.get<DeploymentJob[]>(this.apiUrl);
  }

  getJob(id: number): Observable<DeploymentJob> {
    return this.http.get<DeploymentJob>(`${this.apiUrl}/${id}`);
  }

  createJob(job: DeploymentJob): Observable<DeploymentJob> {
    return this.http.post<DeploymentJob>(this.apiUrl, job);
  }

  updateJob(id: number, job: DeploymentJob): Observable<DeploymentJob> {
    return this.http.put<DeploymentJob>(`${this.apiUrl}/${id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
