package com.deploymentJob.deploy.repository;

import com.deploymentJob.deploy.domain.DeploymentJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeploymentJobRepository extends JpaRepository<DeploymentJob, Long> { }