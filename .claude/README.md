# Claude Code Agent Configuration for Art23 Gallery

This directory contains Claude Code agent configurations for automated deployment, testing, and monitoring of the Art23 gallery website.

## 📁 Directory Structure

```
.claude/
├── agents/                          # Specialized Claude Code agents
│   ├── deployment-orchestrator.md   # Master deployment coordinator
│   ├── code-validator.md            # Code quality checks
│   ├── qa-tester.md                 # Preview deployment testing
│   ├── monitoring-agent.md          # Production monitoring
│   └── test-runner.md               # Test infrastructure
├── commands/                        # Slash commands
│   ├── deploy-preview.md            # Create preview deployment
│   ├── deploy-production.md         # Deploy to production
│   └── emergency-rollback.md        # Emergency rollback
├── settings.json                    # Project configuration
├── hooks.json                       # Automation hooks
└── README.md                        # This file
```

## 🤖 Agents Overview

### Deployment Orchestrator
**File**: `agents/deployment-orchestrator.md`

The master coordinator for all deployment operations.

**Capabilities:**
- Pre-deployment validation (build, code quality)
- Preview deployment creation and coordination
- Production deployment management
- Post-deployment verification
- Rollback execution

**Usage:**
```
Use the deployment orchestrator agent to deploy to Vercel
```

### Code Validator
**File**: `agents/code-validator.md`

Ensures code quality and best practices.

**Capabilities:**
- Build validation
- Project structure verification
- Dependency security checks
- React best practices validation
- Asset optimization checks

**Usage:**
```
Use the code validator agent to check code quality
```

### QA Tester
**File**: `agents/qa-tester.md`

Tests deployed previews before production.

**Capabilities:**
- Page accessibility testing
- Performance measurement
- Client-side routing validation
- Asset loading verification
- Mobile responsiveness checks

**Usage:**
```
Use the qa tester agent to test the preview deployment at [URL]
```

### Monitoring Agent
**File**: `agents/monitoring-agent.md`

Monitors production health and performance.

**Capabilities:**
- Vercel deployment status tracking
- Production health checks
- Uptime monitoring
- Error rate monitoring (Sentry)
- Performance metrics
- SSL certificate validation

**Usage:**
```
Use the monitoring agent to check production health
```

### Test Runner
**File**: `agents/test-runner.md`

Manages testing infrastructure.

**Capabilities:**
- Build validation
- Test framework setup (Vitest, Playwright)
- Test execution (when tests exist)
- Manual testing guidance

**Usage:**
```
Use the test runner agent to run validation checks
```

## ⚡ Slash Commands

### `/deploy-preview`
**File**: `commands/deploy-preview.md`

Creates a Vercel preview deployment for testing.

**Workflow:**
1. Validates code and runs build
2. Commits and pushes changes to GitHub
3. Waits for Vercel to create preview
4. Runs automated QA tests
5. Provides preview URL

**Example:**
```
/deploy-preview
```

### `/deploy-production`
**File**: `commands/deploy-production.md`

Deploys to production (use with caution!).

**Workflow:**
1. Verifies preview was tested
2. Merges changes to main branch
3. Triggers production deployment
4. Validates production site
5. Monitors for errors

**Prerequisites:**
- Preview deployment tested
- QA checks passed
- Code reviewed

**Example:**
```
/deploy-production
```

### `/emergency-rollback`
**File**: `commands/emergency-rollback.md`

Instantly rolls back production to previous version.

**When to use:**
- Production site down
- Critical bug discovered
- Performance degradation
- Security issue

**Recovery time:** < 10 seconds

**Example:**
```
/emergency-rollback
```

## ⚙️ Configuration Files

### settings.json
Project-wide configuration for Claude Code.

**Key settings:**
- **Permissions**: Defines what operations are allowed/denied
- **Environment**: Project environment variables
- **Deployment**: Vercel configuration
- **Project metadata**: Tech stack, features, integrations

### hooks.json
Automated hooks that trigger on specific events.

**Configured hooks:**
- `pre-deployment-validation`: Runs before deployments
- `auto-format`: Formats code after edits
- `production-safeguard`: Extra confirmation for production
- `post-deployment-monitoring`: Health checks after deploy
- `build-failure-handler`: Graceful error handling
- `dependency-audit`: Security checks on package updates

## 🚀 Quick Start

### First-time Setup

1. **Ensure environment variables are set:**
   ```bash
   # Check .env file exists
   cat .env

   # Should contain:
   # VERCEL_TOKEN=...
   # GITHUB_TOKEN=...
   # SENTRY_AUTH_TOKEN=...
   # SUPABASE_SERVICE_ROLE_KEY=...
   ```

2. **Install Vercel CLI (if not already):**
   ```bash
   npm install -g vercel
   ```

3. **Link project to Vercel:**
   ```bash
   vercel link
   ```

### Typical Workflows

#### Deploy Preview Workflow
```
1. Make code changes
2. Run: /deploy-preview
3. Test preview URL
4. If good → proceed to production
   If issues → fix and repeat
```

#### Deploy Production Workflow
```
1. Ensure preview tested
2. Run: /deploy-production
3. Monitor production
4. Verify all systems working
```

#### Emergency Workflow
```
1. Issue detected
2. Run: /emergency-rollback
3. Site restored in <10 seconds
4. Investigate and fix
5. Test in preview
6. Redeploy when ready
```

## 📊 Agent Coordination

Agents work together in coordinated workflows:

### Preview Deployment Flow
```
deployment-orchestrator
    ↓
code-validator (validation)
    ↓
git push → Vercel preview
    ↓
qa-tester (testing)
    ↓
Preview ready for review
```

### Production Deployment Flow
```
deployment-orchestrator
    ↓
Verify preview tested
    ↓
Merge to main → Vercel production
    ↓
monitoring-agent (health check)
    ↓
Production live
```

## 🔧 Customization

### Adding New Agents

1. Create new `.md` file in `agents/`
2. Follow the frontmatter format:
   ```markdown
   ---
   name: my-agent
   description: What the agent does
   model: sonnet
   tools: Read, Bash, Write
   ---

   # Agent content here
   ```

3. Document agent usage in this README

### Adding New Commands

1. Create new `.md` file in `commands/`
2. Document what the command does
3. Include usage examples
4. Update this README

### Modifying Hooks

Edit `hooks.json` to add/modify automation:

```json
{
  "name": "my-hook",
  "description": "What it does",
  "trigger": {
    "command": ["pattern"],
    "phase": "before"
  },
  "actions": [
    {
      "type": "command",
      "command": "echo 'Hello'"
    }
  ]
}
```

## 🎯 Best Practices

### Deployment Best Practices

1. **Always test preview first**
   - Never skip preview testing
   - Test all critical flows
   - Check mobile responsiveness

2. **Monitor after deployment**
   - Watch for errors (Sentry)
   - Check performance (Vercel Analytics)
   - Verify key functionality

3. **Keep deployments small**
   - Deploy one feature at a time
   - Easier to debug issues
   - Faster rollback if needed

4. **Use rollback without hesitation**
   - Better to rollback and fix properly
   - Downtime is more expensive than rollback
   - Document what went wrong

### Agent Usage Best Practices

1. **Delegate to specialized agents**
   - Use deployment-orchestrator for deployments
   - Use code-validator before committing
   - Use qa-tester for thorough testing

2. **Trust the automation**
   - Agents perform comprehensive checks
   - Follow agent recommendations
   - Override only when necessary

3. **Monitor agent actions**
   - Review what agents do
   - Learn from agent workflows
   - Provide feedback for improvements

## 📚 Resources

### Documentation
- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

### Tools
- Vercel Dashboard: https://vercel.com
- GitHub Repository: (your repo URL)
- Sentry Dashboard: https://sentry.io

### Support
- Claude Code Issues: https://github.com/anthropics/claude-code/issues
- Project Issues: (your repo issues URL)

## 🔐 Security Notes

### Environment Variables
- Never commit `.env` files
- Store secrets in Vercel dashboard
- Use `VITE_` prefix for public variables
- Rotate tokens periodically

### Permissions
The `settings.json` specifically denies:
- Writing to `.env` files
- Running destructive commands (`rm -rf`, `sudo`)
- System-level operations

### Deployment Safety
Hooks automatically:
- Validate builds before deployment
- Require confirmation for production
- Monitor post-deployment health
- Handle failures gracefully

## 🆘 Troubleshooting

### Agent Not Working
```bash
# Verify agent file exists
ls .claude/agents/

# Check agent syntax
cat .claude/agents/deployment-orchestrator.md
```

### Command Not Found
```bash
# Verify command file exists
ls .claude/commands/

# Check command syntax
cat .claude/commands/deploy-preview.md
```

### Deployment Fails
```bash
# Check Vercel token
echo $VERCEL_TOKEN

# Test Vercel CLI
vercel whoami

# Check build
npm run build
```

### Hook Not Triggering
- Check `hooks.json` syntax
- Verify `enableHooks` is true
- Check hook trigger patterns
- Review hook execution logs

## 🎉 Success Metrics

The agent setup is successful when:
- ✅ Deployments are automated and reliable
- ✅ Code quality is consistently high
- ✅ Issues are caught in preview
- ✅ Production is stable and monitored
- ✅ Rollbacks are fast and effective
- ✅ Team confidence in deployments is high

## 🔄 Maintenance

### Regular Updates
- Review agent configurations monthly
- Update hook patterns as needed
- Refine automation based on learnings
- Add new agents for new workflows

### Version Control
- Commit all `.claude/` changes
- Document agent modifications
- Track configuration evolution
- Share improvements with team

---

Built with ❤️ for reliable, automated deployments of the Art23 Gallery.
