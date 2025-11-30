# GitHub Actions Workflows

This directory contains CI/CD workflows for the EnterpriseHub Next.js application.

## Workflows

### 1. CI/CD Pipeline (`ci.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**
- **Build and Lint**: Builds the application with multiple Node.js versions (18.x, 20.x) and runs linting
- **Test**: Runs test suite (if available)
- **Security Audit**: Performs npm security audit

### 2. Deploy (`deploy.yml`)

**Triggers:**
- Push to `main` branch
- Version tags (v*)
- Manual workflow dispatch

**Jobs:**
- **Build for Production**: Creates production build
- **Deploy to Vercel**: Deploys to Vercel (requires secrets)
- **Create Release**: Creates GitHub release on version tags

### 3. Pull Request Checks (`pull-request.yml`)

**Triggers:**
- Pull requests to `main` or `develop` branches

**Jobs:**
- **Validate**: Validates PR code and builds application
- **Quality**: Performs code quality checks
- **Comment**: Posts build status comment on PR

## Setup Instructions

### Required Secrets

For Vercel deployment, add these secrets to your GitHub repository:

1. Go to Repository Settings → Secrets and variables → Actions
2. Add the following secrets:

- `VERCEL_TOKEN`: Your Vercel API token
  - Get it from: https://vercel.com/account/tokens
- `VERCEL_ORG_ID`: Your Vercel organization ID
  - Get it from: Vercel dashboard → Settings → General
- `VERCEL_PROJECT_ID`: Your Vercel project ID
  - Get it from: Project Settings → General

### Setting up Vercel Secrets

```bash
# Get Vercel token from dashboard
# Then add to GitHub:
# Settings → Secrets → New repository secret
```

### Optional: Adding Tests

To enable testing in CI/CD, add test scripts to `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Optional: Adding ESLint Configuration

For better linting, create `.eslintrc.json`:

```json
{
  "extends": "next/core-web-vitals"
}
```

## Workflow Status

Check workflow status in the Actions tab of your GitHub repository.

## Troubleshooting

### Build Failures

1. Check Node.js version compatibility
2. Verify all dependencies are in `package.json`
3. Check for TypeScript/JavaScript errors

### Deployment Failures

1. Verify Vercel secrets are correctly set
2. Check Vercel project configuration
3. Review deployment logs in Actions tab

### Security Audit Failures

1. Review `npm audit` output
2. Update vulnerable packages
3. Use `npm audit fix` to auto-fix issues

## Manual Workflow Trigger

You can manually trigger workflows:

1. Go to Actions tab
2. Select the workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## Notification Settings

Configure GitHub notifications for workflow status:
- Settings → Notifications → Actions

