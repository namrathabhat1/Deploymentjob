package com.deploymentJob.deploy.web;

import com.deploymentJob.deploy.dto.DeploymentJobRequest;
import com.deploymentJob.deploy.dto.DeploymentJobResponse;
import com.deploymentJob.deploy.service.DeploymentJobService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class DeploymentJobController {
  private final DeploymentJobService service;

  public DeploymentJobController(DeploymentJobService service) {
    this.service = service;
  }

  @GetMapping
  public List<DeploymentJobResponse> getAll() {
    return service.findAll();
  }

  @PostMapping
  public ResponseEntity<DeploymentJobResponse> create(@Valid @RequestBody DeploymentJobRequest req) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(req));
  }

  @PutMapping("/{id}")
  public DeploymentJobResponse update(@PathVariable Long id, @Valid @RequestBody DeploymentJobRequest req) {
    return service.update(id, req);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable("id") Long id) {
    service.delete(id);
  }
}