# PowerShell script to generate PDF and Word documents from HTML

# Get the current directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlFile = Join-Path $scriptDir "trustshield-ai-document.html"
$pdfFile = Join-Path $scriptDir "TrustShield-AI-Phishing-Detection.pdf"

Write-Host "Generating documents from TrustShield AI content..." -ForegroundColor Green

# Check if HTML file exists
if (-not (Test-Path $htmlFile)) {
    Write-Host "Error: HTML file not found. Please run the Node.js script first." -ForegroundColor Red
    exit 1
}

# Method 1: Generate PDF using Chrome/Edge headless
Write-Host "Attempting to generate PDF using Chrome/Edge..." -ForegroundColor Yellow

# Try to find Chrome or Edge
$chromePath = $null
$possiblePaths = @(
    "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
    "${env:ProgramFiles}\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)

foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        $chromePath = $path
        break
    }
}

if ($chromePath) {
    try {
        Write-Host "Found browser at: $chromePath" -ForegroundColor Green
        
        # Generate PDF using headless Chrome
        $args = @(
            "--headless",
            "--disable-gpu",
            "--print-to-pdf=$pdfFile",
            "--no-margins",
            "file:///$htmlFile"
        )
        
        Start-Process -FilePath $chromePath -ArgumentList $args -Wait -NoNewWindow
        
        if (Test-Path $pdfFile) {
            Write-Host "✅ PDF generated successfully: $pdfFile" -ForegroundColor Green
        } else {
            Write-Host "❌ PDF generation failed" -ForegroundColor Red
        }
    } catch {
        Write-Host "❌ Error generating PDF: $_" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Chrome or Edge not found for PDF generation" -ForegroundColor Red
}

# Method 2: Create Word document using COM automation
Write-Host "Attempting to generate Word document..." -ForegroundColor Yellow

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    
    $doc = $word.Documents.Add()
    
    # Read HTML content
    $htmlContent = Get-Content $htmlFile -Raw
    
    # Insert HTML content
    $range = $doc.Range()
    $range.Text = $htmlContent
    
    # Convert HTML to formatted text (basic approach)
    $doc.Content.Find.Execute([ref]"<[^>]*>", [ref]$false, [ref]$true, [ref]$false, [ref]$false, [ref]$false, [ref]$true, [ref]$true, [ref]$false, [ref]$false, [ref]$false)
    
    # Save as Word document
    $wordFile = Join-Path $scriptDir "TrustShield-AI-Phishing-Detection.docx"
    $doc.SaveAs([ref]$wordFile, [ref]16) # 16 = wdFormatDocumentDefault
    
    $doc.Close()
    $word.Quit()
    
    if (Test-Path $wordFile) {
        Write-Host "✅ Word document generated successfully: $wordFile" -ForegroundColor Green
    } else {
        Write-Host "❌ Word document generation failed" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error generating Word document: $_" -ForegroundColor Red
    Write-Host "Note: Microsoft Word may not be installed or accessible" -ForegroundColor Yellow
}

# Method 3: Alternative approach - Create a simple text-based document
Write-Host "Creating alternative text document..." -ForegroundColor Yellow

try {
    $textFile = Join-Path $scriptDir "TrustShield-AI-Phishing-Detection.txt"
    
    # Extract text content from HTML
    $htmlContent = Get-Content $htmlFile -Raw
    
    # Simple HTML to text conversion
    $textContent = $htmlContent -replace '<[^>]*>', '' -replace '&nbsp;', ' ' -replace '&lt;', '<' -replace '&gt;', '>' -replace '&amp;', '&'
    
    # Clean up extra whitespace
    $textContent = $textContent -replace '\s+', ' ' -replace '`n`n', "`n`n"
    
    Set-Content -Path $textFile -Value $textContent.Trim()
    
    Write-Host "✅ Text document generated: $textFile" -ForegroundColor Green
} catch {
    Write-Host "❌ Error generating text document: $_" -ForegroundColor Red
}

Write-Host "`nDocument generation complete!" -ForegroundColor Green
Write-Host "Generated files:" -ForegroundColor Cyan
Write-Host "- HTML: $htmlFile" -ForegroundColor White
Write-Host "- PDF: $pdfFile (if successful)" -ForegroundColor White
Write-Host "- Word: $(Join-Path $scriptDir 'TrustShield-AI-Phishing-Detection.docx') (if successful)" -ForegroundColor White
Write-Host "- Text: $(Join-Path $scriptDir 'TrustShield-AI-Phishing-Detection.txt')" -ForegroundColor White

Write-Host "`nYou can also:" -ForegroundColor Yellow
Write-Host "1. Open the HTML file in a browser and use 'Print to PDF'" -ForegroundColor White
Write-Host "2. Copy content from the HTML file to Microsoft Word" -ForegroundColor White
Write-Host "3. Use online converters like smallpdf.com or ilovepdf.com" -ForegroundColor White
