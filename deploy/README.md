# Deployment Notes (Azure DevOps)

This project includes a CI/CD pipeline in `azure-pipelines.yml` that verifies, publishes, and (optionally) deploys the static app container.

## What gets created
- **Verify stage**: builds Docker image, runs container locally in pipeline agent, checks HTTP readiness (`/`), and performs smoke test.
- **Publish stage**: pushes image to Azure Container Registry (ACR) on `main` only.
- **Deploy stage (optional, gated)**: deploys to **Azure Container Instances (ACI)** when `deployEnabled=true`.

## Required Azure DevOps setup
Create these service connections and variables before running publish/deploy:

1. **Docker Registry service connection**
   - Name must match pipeline variable `containerRegistryServiceConnection`
   - Example value used in YAML: `acr-service-connection`

2. **Azure Resource Manager service connection**
   - Name must match pipeline variable `azureSubscriptionServiceConnection`
   - Example value used in YAML: `azure-rm-service-connection`

3. **Pipeline/variable-group values**
   - `acrLoginServer` (e.g., `yourregistry.azurecr.io`)
   - `azureResourceGroup`
   - `azureContainerGroupName`
   - `azureLocation`
   - `containerCpu`, `containerMemory`

4. **Secret variables** (mark secret)
   - `ACR_USERNAME`
   - `ACR_PASSWORD`

## Deploy toggle
Deployment is disabled by default:

```yaml
deployEnabled: 'false'
```

Set it to `'true'` (preferably via pipeline variable override) when deployment should run.

## Runtime details
- Container image serves static files via Nginx.
- Container exposes port **80**.
- Health/readiness path: **/**
