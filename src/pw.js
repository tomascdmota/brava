// Function to draw a circle on the canvas
function drawCircle(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

// Generate the QR code
var qr = new QRCode({
  content: "https://app.bravanfc.com/3MoCsetxv8wuJBkts624Qf/cards/889061", // Replace with your content
  width: 256,
  height: 256,
  padding: 0,
  color: "#000000",
  background: "#ffffff",
  ecl: "M"
});

// Get the QR code as a matrix
var qrMatrix = qr.toMatrix();

// Create a canvas element
var canvas = document.createElement('canvas');
canvas.width = canvas.height = qrMatrix.length * 10; // Adjust size as needed
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

// Calculate circle radius based on canvas size and QR code dimensions
var circleRadius = Math.floor(canvas.width / qrMatrix.length / 2);

// Loop through the QR code matrix and draw circles
for (var y = 0; y < qrMatrix.length; y++) {
  for (var x = 0; x < qrMatrix[y].length; x++) {
      if (qrMatrix[y][x]) {
          // Draw a circle at the appropriate position
          drawCircle(ctx, x * circleRadius * 2 + circleRadius, y * circleRadius * 2 + circleRadius, circleRadius);
      }
  }
}
