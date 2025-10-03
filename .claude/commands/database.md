Perform database operations for the Art23 platform using Supabase.

**Operation**: $ARGUMENTS

## Workflow

Use the **database-manager** agent to perform the requested database operation.

## Available Operations

### Backup
- `backup production` - Create production database backup
- `backup staging` - Create staging database backup

### Migrations
- `migrate up` - Run pending migrations
- `migrate status` - Check migration status
- `migrate rollback` - Rollback last migration

### Maintenance
- `vacuum` - Vacuum database tables
- `analyze` - Update statistics
- `reindex` - Rebuild indexes
- `performance` - Analyze query performance

### Data Operations
- `refresh-staging` - Refresh staging from production (with data sanitization)

## Safety
- Always confirm before destructive operations
- Ensure backups exist before migrations
- Verify staging environment for refresh operations

Start with: "🗄️ Initiating database operation: $ARGUMENTS..."
