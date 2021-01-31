In this repository are listed the Lambda functions that will be deployed on ASW.
TASK REQUIREMENT:
- a. with RESTful endpoints using NodeJS (Async/Await is preferred) and the
  following AWS technologies: API Gateway, Lambda, DynamoDB.
    - i. Create Task
    - ii. Read Tasks (include pagination), Read Task
    - iii. Update Task
    - iv. Delete Task
- b. Add Input Validation
- c. Testing
    - i. Unit tests using Jest
    - ii. 1 Integration test using Jest (on prod db is fine)
    - iii. Postman/Newman Tests
- d. Your code should be structured to support deployment to multiple environments.
  AWS, Azure, ExpressJS
- e. Add basic authentication
- f. X-Ray Tracing to allow for ServiceLens
- g. Add basic documentation on
    - i. api usage
    - ii. installation
2. For Bonus Points
   - a. SAM template to script the infrastructure
   - i. Deployments of dev, staging, and prod environments
   - b. Secure with Cognito user pool
   - c. Cloudwatch metrics &amp; dashboards for monitoring
   - d. Configure deployments with canary traffic shifting support
   - e. API Documentation using swagger
    

Attached to the repository there is the Postman collection to test the API.