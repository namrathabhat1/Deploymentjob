package com.deploymentJob.deploy.dto;

import com.deploymentJob.deploy.domain.Environment;
import com.deploymentJob.deploy.domain.Status;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class DeploymentJobRequest {
  @NotBlank(message = "name must not be empty")
  private String name;
  @NotNull(message = "environment is required")
  private Environment environment;
  @NotNull(message = "status is required")
  private Status status;

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public Environment getEnvironment() { return environment; }
  public void setEnvironment(Environment environment) { this.environment = environment; }
  public Status getStatus() { return status; }
  public void setStatus(Status status) { this.status = status; }
}