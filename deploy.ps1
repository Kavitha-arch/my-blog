# Deploy script for Next.js blog → GitHub Pages (docs/ folder)

Write-Host "Building Next.js app for GitHub Pages..."

$env:GITHUB_PAGES="true"
npx next build

Write-Host "Exporting static files..."
# Exported site goes to /out because output: "export"
npx next export

Write-Host "Updating docs/ folder..."

# Remove old docs safely (no error if missing)
if (Test-Path docs) {
    Remove-Item docs -Recurse -Force
}

# Copy fresh build
Copy-Item out docs -Recurse -Force

# Create .nojekyll to allow _next folder
New-Item docs/.nojekyll -ItemType File -Force | Out-Null

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

Write-Host ""
Write-Host "✅ Deployment complete!"
Write-Host "🌐 https://Kavitha-arch.github.io/my-blog"
Write-Host "⏳ Wait a few minutes for GitHub Pages to update."
