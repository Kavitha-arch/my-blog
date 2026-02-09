# Deploy script for Next.js blog → GitHub Pages (docs/ folder)

Write-Host "Building Next.js app..."
npx next build

Write-Host "Exporting static files..."
npx next export

Write-Host "Updating docs/ folder..."
Remove-Item -Recurse -Force docs
Copy-Item -Recurse -Force out docs

Write-Host "Committing and pushing to GitHub..."
git add docs
git commit -m "Deploy updated blog $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main

Write-Host "https://Kavitha-arch.github.io/my-blog"
Write-Host "✅ Deployment complete! Wait a few minutes for GitHub Pages to update."
