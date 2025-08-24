import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService, DeploymentJob } from '../job.service';

@Component({
  selector: 'app-deployment-job-create',
  templateUrl: './deployment-job-create.component.html',
  styleUrls: ['./deployment-job-create.component.css'],
})
export class DeploymentJobCreateComponent implements OnInit {
  job: DeploymentJob = {
    name: '',
    environment: 'DEV',
    status: 'PENDING',
  };

  isEdit = false;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.jobService.getJob(+id).subscribe({
        next: (data: DeploymentJob) => {
          this.job = { ...data };
        },
        error: (err: any) => console.error('Error fetching job:', err),
      });
    }
  }

  createOrUpdateJob() {
    if (this.isEdit && this.job.id) {
      this.jobService.updateJob(this.job.id, this.job).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err: any) => console.error('Error updating job:', err),
      });
    } else {
      this.jobService.createJob(this.job).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err: any) => console.error('Error creating job:', err),
      });
    }
  }
}
