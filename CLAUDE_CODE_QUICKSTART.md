# 🚀 Claude Code Quick Start - Art23 Gallery

Quick reference for using Claude Code agents with this project.

## ⚡ Quick Commands

### Deploy to Preview
```
/deploy-preview
```
Creates a Vercel preview deployment. Test before going to production!

### Deploy to Production
```
/deploy-production
```
⚠️ **Use with caution!** Deploys to live production site.

### Emergency Rollback
```
/emergency-rollback
```
🚨 **Emergency only!** Instantly rolls back production.

## 🤖 Quick Agent Usage

### Check Code Quality
```
Use the code validator agent to check code quality
```

### Test Preview Deployment
```
Use the qa tester agent to test the preview deployment at [URL]
```

### Monitor Production
```
Use the monitoring agent to check production health
```

### Deploy to Vercel
```
Use the deployment orchestrator agent to deploy to Vercel
```

## 📋 Typical Workflow

### 1. Make Changes
```bash
# Edit your code
# Test locally
npm run dev
```

### 2. Create Preview
```
/deploy-preview
```
- Validates code
- Pushes to GitHub
- Creates Vercel preview
- Runs QA tests
- Provides preview URL

### 3. Test Preview
- Click preview URL
- Test all functionality
- Check mobile responsiveness
- Verify no errors

### 4. Deploy to Production
```
/deploy-production
```
- Merges to main
- Deploys to production
- Validates deployment
- Monitors health

### 5. Monitor
```
Use the monitoring agent to check production health
```

## 🆘 Emergency Recovery

If production has issues:

```
/emergency-rollback
```

This will:
- Rollback in < 10 seconds
- Restore previous working version
- Verify rollback successful

Then:
1. Investigate issue
2. Fix in preview
3. Test thoroughly
4. Redeploy when ready

## 📦 Environment Setup

Required in `.env`:
```bash
VERCEL_TOKEN=your_token
GITHUB_TOKEN=your_token
SENTRY_AUTH_TOKEN=your_token
SUPABASE_SERVICE_ROLE_KEY=your_key
```

## ✅ Pre-deployment Checklist

Before `/deploy-production`:
- [ ] Preview tested thoroughly
- [ ] All pages load correctly
- [ ] Cart functionality works
- [ ] Forms validate properly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] 3D scenes load
- [ ] Images display correctly

## 🔍 Troubleshooting

### Build Fails
```bash
npm run build
```
Check error messages and fix issues.

### Preview Not Working
Check Vercel dashboard for build logs.

### Production Issues
Run `/emergency-rollback` immediately!

## 📚 Full Documentation

For detailed information:
- **Agent details**: See `.claude/README.md`
- **Project overview**: See `CLAUDE.md`
- **Deployment guide**: See `DEPLOYMENT_GUIDE.md`

## 🎯 Key Principles

1. **Always preview first** - Never deploy directly to production
2. **Test thoroughly** - Check all critical functionality
3. **Monitor closely** - Watch for errors after deployment
4. **Rollback fast** - Don't hesitate to rollback if issues arise
5. **Deploy small** - One feature at a time

---

**Remember**: The agents are here to help! Use them to make deployments safe, fast, and reliable.

For questions or issues: Check `.claude/README.md` or `CLAUDE.md`
