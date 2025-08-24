import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService, DeploymentJob } from '../job.service';

@Component({
  selector: 'app-deployment-job-list',
  templateUrl: './deployment-job-list.component.html',
  styleUrls: ['./deployment-job-list.component.css'],
})
export class DeploymentJobListComponent implements OnInit {
  jobs: DeploymentJob[] = [];

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (data: DeploymentJob[]) => (this.jobs = data),
      error: (err: any) => console.error('Error loading jobs:', err),
    });
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id).subscribe({
      next: () => this.loadJobs(),
      error: (err: any) => console.error('Error deleting job:', err),
    });
  }

  editJob(id: number) {
    this.router.navigate(['/create', id]);
  }
}
