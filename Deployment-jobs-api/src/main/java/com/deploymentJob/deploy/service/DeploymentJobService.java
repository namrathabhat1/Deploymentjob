package com.deploymentJob.deploy.service;

import com.deploymentJob.deploy.domain.DeploymentJob;
import com.deploymentJob.deploy.dto.DeploymentJobRequest;
import com.deploymentJob.deploy.dto.DeploymentJobResponse;
import com.deploymentJob.deploy.repository.DeploymentJobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeploymentJobService {
  private final DeploymentJobRepository repo;

  public DeploymentJobService(DeploymentJobRepository repo) {
    this.repo = repo;
  }

  public List<DeploymentJobResponse> findAll() {
    return repo.findAll().stream()
      .map(j -> new DeploymentJobResponse(j.getId(), j.getName(), j.getEnvironment(), j.getStatus(), j.getTimestamp()))
      .toList();
  }

  public DeploymentJobResponse create(DeploymentJobRequest req) {
    DeploymentJob j = new DeploymentJob();
    j.setName(req.getName());
    j.setEnvironment(req.getEnvironment());
    j.setStatus(req.getStatus());
    System.out.println("Entered here----------------");
    DeploymentJob saved = repo.save(j);
    return new DeploymentJobResponse(saved.getId(), saved.getName(), saved.getEnvironment(), saved.getStatus(), saved.getTimestamp());
  }

  public DeploymentJobResponse update(Long id, DeploymentJobRequest req) {
    DeploymentJob j = repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Job not found: " + id));
    j.setName(req.getName());
    j.setEnvironment(req.getEnvironment());
    j.setStatus(req.getStatus());
    DeploymentJob saved = repo.save(j);
    return new DeploymentJobResponse(saved.getId(), saved.getName(), saved.getEnvironment(), saved.getStatus(), saved.getTimestamp());
  }

  public void delete(Long id) {
    if (!repo.existsById(id)) {
      throw new IllegalArgumentException("Job not found: " + id);
    }
    repo.deleteById(id);
  }
}