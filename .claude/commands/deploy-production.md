Deploy the Art23 website to production on Vercel.

⚠️ **Warning**: This deploys to production. Ensure preview has been tested!

## Prerequisites
- Preview deployment tested and approved
- All tests passing
- No critical security vulnerabilities
- Team approval obtained

## Workflow

1. Use the **art23-deployment-orchestrator** agent to coordinate production deployment
2. The orchestrator will:
   - Verify prerequisites
   - Merge current branch to main (triggers production deployment)
   - Monitor Vercel production build
   - Run post-deployment health checks
3. Use the **monitoring-agent** to verify production health
4. Use the **qa-tester** agent to run smoke tests on production

## Vercel Production Deployment
- Merging to `main` branch triggers automatic production deployment
- Production URL: `https://art23.com`
- Build time: ~2-3 minutes
- Automatic rollback on build failure (if configured)

## Post-Deployment
- Monitor Sentry for errors
- Check Vercel Analytics for traffic
- Verify Core Web Vitals
- Ensure all critical user flows work

## Emergency Rollback
If issues detected, use `/emergency-rollback` immediately.

Start with: "🚢 Initiating production deployment for Art23..."
