import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { JobService, DeploymentJob } from "../job.service";

@Component({
  selector: "app-deployment-job-list",
  templateUrl: "./deployment-job-list.component.html",
  styleUrls: ["./deployment-job-list.component.css"],
})
export class DeploymentJobListComponent implements OnInit {
  jobs: DeploymentJob[] = [];

  constructor(
    private jobService: JobService,
    private router: Router,
    private cdr: ChangeDetectorRef  //built in reference object from Angular
 ) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (data: DeploymentJob[]) => {
        this.jobs = data;
        console.log("API data, list of jobs", this.jobs);
        this.cdr.detectChanges(); //force UI update
      },
      error: (err: any) => console.error("Error loading jobs:", err),
    });
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id).subscribe({
      next: () => this.loadJobs(),
      error: (err: any) => console.error("Error deleting job:", err),
    });
  }

  editJob(id: number) {
    this.router.navigate(["/create", id]);
  }
}
