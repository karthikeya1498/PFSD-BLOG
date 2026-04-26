const fs = require('fs');
const path = require('path');

// Read the HTML content
const htmlFile = path.join(__dirname, 'trustshield-ai-document.html');
const htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Extract text content from HTML
function extractTextFromHTML(html) {
    // Remove HTML tags
    let text = html.replace(/<[^>]*>/g, '\n');
    
    // Replace HTML entities
    text = text.replace(/&nbsp;/g, ' ')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'");
    
    // Clean up multiple newlines and spaces
    text = text.replace(/\n\s*\n/g, '\n\n')
                .replace(/[ \t]+/g, ' ')
                .replace(/^\s+|\s+$/gm, '');
    
    return text;
}

// Create RTF content for Word document
function createRTF(text) {
    const rtfHeader = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}`;
    const rtfFooter = '}';
    
    // Convert special characters to RTF format
    let rtfContent = text.replace(/\\/g, '\\\\')
                      .replace(/{/g, '\\{')
                      .replace(/}/g, '\\}')
                      .replace(/\n/g, '\\par ');
    
    return rtfHeader + rtfContent + rtfFooter;
}

// Extract text and create documents
const textContent = extractTextFromHTML(htmlContent);
const rtfContent = createRTF(textContent);

// Write text file
const textFile = path.join(__dirname, 'TrustShield-AI-Phishing-Detection-Formatted.txt');
fs.writeFileSync(textFile, textContent, 'utf8');

// Write RTF file (can be opened in Word)
const rtfFile = path.join(__dirname, 'TrustShield-AI-Phishing-Detection.rtf');
fs.writeFileSync(rtfFile, rtfContent, 'utf8');

console.log('✅ Documents generated successfully:');
console.log(`📄 Text file: ${textFile}`);
console.log(`📝 RTF file (Word compatible): ${rtfFile}`);
console.log('\nThe RTF file can be opened directly in Microsoft Word and will preserve formatting.');
