# CI/CD Pipeline Documentation

## Overview

This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The workflows automatically build, test, and deploy the application.

## Workflows

### 1. CI Pipeline (`.github/workflows/ci.yml`)

Runs on every push and pull request to `main` or `develop` branches.

**What it does:**
- ✅ Checks out code
- ✅ Sets up Node.js (tests with multiple versions: 18.x, 20.x)
- ✅ Installs dependencies using `npm ci`
- ✅ Runs linting (if available)
- ✅ Builds the application
- ✅ Runs security audit
- ✅ Runs tests (if available)

### 2. Deploy Pipeline (`.github/workflows/deploy.yml`)

Runs when code is pushed to `main` branch or when version tags are created.

**What it does:**
- ✅ Creates production build
- ✅ Deploys to Vercel (optional, requires secrets)
- ✅ Creates GitHub release on version tags

### 3. Pull Request Checks (`.github/workflows/pull-request.yml`)

Runs on pull requests to validate code quality.

**What it does:**
- ✅ Validates code changes
- ✅ Checks for common issues (console.log, TODO comments)
- ✅ Builds application
- ✅ Posts build status as PR comment

## Setup

### 1. Required GitHub Secrets (for Vercel deployment)

If you want to enable automatic deployment to Vercel, add these secrets:

**How to add secrets:**
1. Go to your GitHub repository
2. Click `Settings` → `Secrets and variables` → `Actions`
3. Click `New repository secret`
4. Add each secret:

| Secret Name | Description | How to Get |
|------------|-------------|------------|
| `VERCEL_TOKEN` | Vercel API token | [Get from Vercel](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Vercel Organization ID | Vercel Dashboard → Settings → General |
| `VERCEL_PROJECT_ID` | Vercel Project ID | Project Settings → General |

### 2. Enable Dependabot (Optional)

Dependabot is configured in `.github/dependabot.yml` to automatically:
- Update npm dependencies weekly
- Update GitHub Actions monthly
- Create PRs for security updates

**How to enable:**
1. Go to repository Settings
2. Click `Security` → `Dependabot`
3. Enable Dependabot alerts and security updates

## Usage

### Automatic Workflows

Workflows run automatically based on triggers:

- **Push to main/develop**: Runs CI pipeline
- **Pull Request**: Runs PR checks and CI pipeline
- **Push to main with tag**: Runs deploy pipeline

### Manual Workflow Trigger

To manually trigger a workflow:

1. Go to `Actions` tab in GitHub
2. Select the workflow (e.g., "Deploy")
3. Click `Run workflow`
4. Select branch and click `Run workflow`

### Version Releases

To create a release:

```bash
# Tag your release
git tag v1.0.0
git push origin v1.0.0
```

This will:
- Build the application
- Create a GitHub release
- Deploy to production (if configured)

## Status Badges

Add status badges to your README.md:

```markdown
![CI/CD Pipeline](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/CD%20Pipeline/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Deploy/badge.svg)
```

## Troubleshooting

### Build Failures

**Problem:** Build fails in CI/CD

**Solutions:**
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Check for syntax errors in code
- Review build logs in Actions tab

### Deployment Failures

**Problem:** Deployment to Vercel fails

**Solutions:**
- Verify Vercel secrets are correctly set
- Check Vercel project configuration
- Ensure project is linked to Vercel
- Review deployment logs

### Linting Failures

**Problem:** Linting fails in CI/CD

**Solutions:**
- Run `npm run lint` locally to see errors
- Fix linting errors in code
- Update `.eslintrc.json` if rules are too strict
- Use `eslint-disable` comments for exceptions (sparingly)

### Security Audit Failures

**Problem:** npm audit finds vulnerabilities

**Solutions:**
- Run `npm audit` locally to see details
- Use `npm audit fix` to auto-fix issues
- Manually update vulnerable packages
- Review security advisories

## Best Practices

1. **Always test locally before pushing**
   ```bash
   npm run lint
   npm run build
   ```

2. **Keep dependencies updated**
   - Dependabot will create PRs automatically
   - Review and merge dependency updates regularly

3. **Use meaningful commit messages**
   - Helps track changes in workflow logs
   - Makes debugging easier

4. **Monitor workflow runs**
   - Check Actions tab regularly
   - Set up notifications for failures

5. **Review PR checks before merging**
   - Ensure all checks pass
   - Address any warnings or errors

## Workflow Files Structure

```
.github/
├── workflows/
│   ├── ci.yml              # Main CI pipeline
│   ├── deploy.yml          # Deployment pipeline
│   └── pull-request.yml    # PR validation
├── dependabot.yml          # Dependency updates
└── README.md              # Workflow documentation
```

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)

