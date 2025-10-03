Create a Vercel preview deployment for the Art23 website.

## Workflow

1. Use the **art23-deployment-orchestrator** agent to coordinate the preview deployment
2. The orchestrator will:
   - Verify all changes are committed
   - Push current branch to GitHub (triggers Vercel preview automatically)
   - Monitor Vercel build status
   - Get preview URL when deployment completes
3. Use the **qa-tester** agent to validate the preview deployment
4. Provide preview URL for manual testing

## Vercel Integration
- Vercel automatically creates preview deployments for all branch pushes
- Preview URL format: `art23-{branch}-{org}.vercel.app`
- Build takes approximately 2-3 minutes
- Environment variables from preview environment are used

## Validation
After deployment, the QA agent will check:
- All pages load correctly
- API endpoints respond
- No console errors
- Performance metrics within budget
- Cross-browser compatibility

Start with: "🚀 Creating Vercel preview deployment for Art23..."
