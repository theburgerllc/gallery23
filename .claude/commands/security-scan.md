Run comprehensive security scans on the Art23 platform.

**Scope**: $ARGUMENTS (default: full)

## Workflow

Use the **security-scanner** agent to perform the security audit.

## Scan Types

### Dependency Vulnerabilities
- npm audit for frontend and backend
- Check for known CVEs
- Outdated package detection
- License compliance check

### OWASP Security Checks
- SQL injection vulnerabilities
- XSS (Cross-Site Scripting) vulnerabilities
- CSRF protection verification
- Authentication/authorization issues
- Security header validation

### Infrastructure Security
- SSL/TLS configuration
- Exposed secrets detection
- API key security
- Database security configuration
- Cloud resource permissions

### Code Security
- Static code analysis
- Hardcoded credentials scan
- Unsafe dependencies
- Security best practices compliance

## Available Scopes
- `full` - Complete security audit (all checks)
- `dependencies` - Only dependency vulnerabilities
- `infrastructure` - Only infrastructure and configuration
- `owasp` - Only OWASP Top 10 checks
- `quick` - Fast critical-issues-only scan

## Security Standards
Checks compliance with:
- OWASP Top 10 (2021)
- CWE/SANS Top 25
- PCI DSS requirements (if applicable)
- GDPR data protection

## Output
- Security score and grade
- Critical/high/medium/low vulnerability counts
- Detailed remediation guidance
- Compliance checklist
- Automated fix suggestions

## Post-Scan Actions
- Create GitHub security advisories for critical issues
- Auto-create pull requests for dependency updates
- Generate executive security report

Start with: "🔒 Running security scan ($ARGUMENTS scope)..."
