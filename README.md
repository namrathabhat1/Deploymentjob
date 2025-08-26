# Deploymentjob
Deployment Dashboard
Scenario
Your company wants to build a Deployment Dashboard that allows users to:
View a list of deployment jobs.
Create new deployment jobs.
Monitor job status.
Automatically deploy the application to Azure using GitHub Actions.
Tasks
1. Frontend (Angular)
Goal: Build a dashboard UI.
Create an Angular app with a DeploymentJob component.
Display a list of jobs fetched from the backend.
Include a form to create a new job (name, environment, status).
Add routing between job list and job creation views.
Write unit tests for the job list component.
2. Backend (Java - Spring Boot)
Goal: Build a REST API.
Create a DeploymentJob entity with fields: id, name, environment, status, timestamp.
Implement CRUD endpoints:
GET /jobs
POST /jobs
PUT /jobs/{id}
DELETE /jobs/{id}
Use H2 for persistence.
Add validation (e.g., name must not be empty).
Write unit tests for the service layer.
3. CI/CD (GitHub Actions)
Goal: Automate build and deployment.
Create a GitHub Actions workflow:
Build Angular and Java projects.
Run tests.
Package backend as Docker image.
Deploy to AWS using one of the following:
AWS Elastic Beanstalk
Amazon ECS (Fargate)
AWS EC2 with Docker
Use GitHub Secrets for AWS credentials (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, etc.).
4. Cloud Deployment (AWS)
Goal: Host the full-stack app.
Deploy backend to AWS (Elastic Beanstalk or ECS).
Deploy frontend to Amazon S3 + CloudFront or Elastic Beanstalk.
Configure environment variables and secrets using AWS Parameter Store or Secrets Manager.
Provide a public URL for access.
Acceptance Criteria
Component
Criteria
Angular
UI loads jobs, form submits correctly, routing works, tests pass
Java Backend
API endpoints work, validation enforced, tests pass
GitHub Actions
Workflow runs on push, builds, tests, and deploys successfully
AWS
App is live, backend and frontend communicate, secrets are secure
