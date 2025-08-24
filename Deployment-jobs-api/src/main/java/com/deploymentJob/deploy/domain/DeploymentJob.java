package com.deploymentJob.deploy.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.Instant;

@Entity
public class DeploymentJob {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "name must not be empty")
  private String name;

  @Enumerated(EnumType.STRING)
  private Environment environment;

  @Enumerated(EnumType.STRING)
  private Status status;

  @Column(nullable = false, updatable = false)
  private Instant timestamp;

  @PrePersist
  public void prePersist() {
    if (timestamp == null) timestamp = Instant.now();
  }

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public Environment getEnvironment() { return environment; }
  public void setEnvironment(Environment environment) { this.environment = environment; }

  public Status getStatus() { return status; }
  public void setStatus(Status status) { this.status = status; }

  public Instant getTimestamp() { return timestamp; }
  public void setTimestamp(Instant timestamp) { this.timestamp = timestamp; }
}
