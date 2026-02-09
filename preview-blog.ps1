# ------------------------------
# preview-blog.ps1
# ------------------------------

# Stop on errors
$ErrorActionPreference = "Stop"

Write-Host "🛠  Installing dependencies (if needed)..."
npm install

Write-Host "📦 Building Next.js production version..."
npx next build

Write-Host "📝 Exporting static HTML..."
npx next export

Write-Host "🚀 Serving the static site locally on port 5000..."
Write-Host "Open your browser at http://localhost:5000"
serve out
