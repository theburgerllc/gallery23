Run a comprehensive performance audit of the Art23 platform.

**Target**: $ARGUMENTS (default: production)

## Workflow

Use the **performance-optimizer** agent to conduct the performance audit.

## Audit Scope

### Frontend Performance
- Lighthouse performance score
- Core Web Vitals (LCP, FID, CLS)
- Bundle size analysis
- Image optimization check
- JavaScript execution time
- CSS optimization
- Critical rendering path

### API Performance
- Response time analysis (p50, p95, p99)
- Database query performance
- API endpoint optimization
- Cache hit ratios
- CDN performance

### Infrastructure
- Vercel Edge Function performance
- Database connection pooling
- Resource utilization
- Auto-scaling efficiency

## Available Targets
- `production` - Audit live production site (https://art23.com)
- `preview` - Audit latest preview deployment
- `localhost` - Audit local development build

## Performance Budgets
The audit will check against these budgets:
- **Lighthouse Score**: >90
- **LCP**: <2.5s
- **FID**: <100ms
- **CLS**: <0.1
- **Bundle Size**: <250KB (gzipped)
- **API Response (p95)**: <200ms

## Output
- Detailed performance report
- Identified bottlenecks
- Optimization recommendations
- Before/after comparisons (if available)
- Actionable improvement plan

Start with: "⚡ Running performance audit on $ARGUMENTS environment..."
