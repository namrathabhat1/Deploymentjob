package com.deploymentJob.deploy.dto;

import com.deploymentJob.deploy.domain.Environment;
import com.deploymentJob.deploy.domain.Status;
import java.time.Instant;

public class DeploymentJobResponse {
  private Long id;
  private String name;
  private Environment environment;
  private Status status;
  private Instant timestamp;

  public DeploymentJobResponse(Long id, String name, Environment environment, Status status, Instant timestamp) {
    this.id = id;
    this.name = name;
    this.environment = environment;
    this.status = status;
    this.timestamp = timestamp;
  }

  public Long getId() { return id; }
  public String getName() { return name; }
  public Environment getEnvironment() { return environment; }
  public Status getStatus() { return status; }
  public Instant getTimestamp() { return timestamp; }
}