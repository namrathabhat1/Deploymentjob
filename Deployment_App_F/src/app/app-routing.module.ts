import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentJobListComponent } from './deployment-job-list/deployment-job-list.component';
import { DeploymentJobCreateComponent } from './deployment-job-create/deployment-job-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: DeploymentJobListComponent },
  { path: 'create', component: DeploymentJobCreateComponent },
  { path: 'create/:id', component: DeploymentJobCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {}
