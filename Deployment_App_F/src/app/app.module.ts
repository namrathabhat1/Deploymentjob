import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { DeploymentJobListComponent } from './deployment-job-list/deployment-job-list.component';
import { DeploymentJobCreateComponent } from './deployment-job-create/deployment-job-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DeploymentJobListComponent,
    DeploymentJobCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  