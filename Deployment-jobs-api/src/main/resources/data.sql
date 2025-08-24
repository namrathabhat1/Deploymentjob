INSERT INTO deployment_job (name, environment, status, timestamp)
VALUES 
('Initialize cluster', 'DEV', 'SUCCESS', CURRENT_TIMESTAMP),
('Apply schema migrations', 'STAGING', 'PENDING', CURRENT_TIMESTAMP),
('Deploy web app', 'PROD', 'RUNNING', CURRENT_TIMESTAMP);
