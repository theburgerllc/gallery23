Perform an emergency rollback of the Art23 production deployment on Vercel.

🚨 **EMERGENCY USE ONLY**: Use when production is experiencing critical issues.

## When to Use
- Production site is down or unavailable
- Critical bug affecting all users
- Severe performance degradation
- Security vulnerability discovered
- Data corruption issues

## Workflow

1. Use the **art23-deployment-orchestrator** agent to perform emergency rollback
2. The orchestrator will:
   - Identify the last stable deployment
   - Use Vercel CLI to rollback: `vercel rollback`
   - Verify rollback completed successfully
   - Confirm site is back to working state
3. Use the **monitoring-agent** to verify production health post-rollback

## Vercel Rollback
Vercel maintains deployment history, allowing instant rollback to any previous deployment:
- Previous deployment is promoted to production
- DNS changes are automatic
- Takes effect within seconds
- Original deployment remains available for investigation

## Post-Rollback Actions
1. Create incident report documenting the issue
2. Investigate root cause in the failed deployment
3. Create GitHub issue tracking the problem
4. Fix issues in development environment
5. Deploy fix through proper preview → production workflow

## Communication
- Notify team immediately via Slack
- Update status page if applicable
- Document timeline and impact

Start with: "🚨 EMERGENCY ROLLBACK INITIATED for Art23 production..."
