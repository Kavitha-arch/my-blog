# Deploy script for Next.js blog → GitHub Pages (docs/ folder)

Write-Host "Building Next.js app..."
npx next build

Write-Host "Exporting static files..."
# Static export goes to /out automatically because of next.config.js
# Make sure basePath & assetPrefix are set correctly for dev
npx next export

Write-Host "Updating docs/ folder..."
# Remove old docs
Remove-Item -Recurse -Force docs
# Copy new build
Copy-Item -Recurse -Force out docs

Write-Host "Committing and pushing to GitHub..."
git add docs
# Only commit if there are changes
$changes = git status --porcelain
if ($changes) {
    git commit -m "Deploy updated blog $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push origin dev
} else {
    Write-Host "No changes to deploy. Skipping commit."
}

Write-Host "✅ Deployment complete! Check the site at:"
Write-Host "https://Kavitha-arch.github.io/my-blog"
Write-Host "⏳ Wait a few minutes for GitHub Pages to update."
