const fs = require('fs');
const QRCode = require('qrcode-svg');
const svg2img = require('svg2img');

// Function to generate QR codes from URLs in a file
function generateQRCodesFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        var urls = data.split(/\r?\n/).map(url => url.trim());

        // Generate QR codes for each URL
        urls.forEach((url, index) => {
            if (url !== '') {
                const qr = new QRCode({
                    content: url,
                    padding: 4,
                    width: 256,
                    height: 256,
                    color: "#FFFFFF",
                    background: "transparent",
                    ecl: "H" // Error correction level: High
                });
                const svgFilePath = `qrcode_${index}.svg`;
                const pngFilePath = `qrcode_${index}.png`;

                fs.writeFileSync(svgFilePath, qr.svg(), 'utf8');

                svg2img(svgFilePath, function (error, buffer) {
                    if (error) {
                        console.error("Error converting SVG to PNG:", error);
                    } else {
                        fs.writeFileSync(pngFilePath, buffer);
                        console.log(`QR code saved as ${pngFilePath}`);
                    }
                    // Delete the SVG file after converting
                    fs.unlinkSync(svgFilePath);
                });
            }
        });
    });
}

// Example usage:
generateQRCodesFromFile('qr-codes.txt');
