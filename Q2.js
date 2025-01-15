// Generate input fields for each photo
document.getElementById('numPhotos').addEventListener('input', function () {
  const numPhotos = parseInt(this.value);
  const photosInputsDiv = document.getElementById('photosInputs');
  photosInputsDiv.innerHTML = '';

  for (let i = 0; i < numPhotos; i++) {
    photosInputsDiv.innerHTML += `
      <div class="input-group">
        <label for="photo${i}W">Photo ${i + 1} Width (W):</label>
        <input type="number" id="photo${i}W" placeholder="Width of photo ${i + 1}" required>
      </div>
      <div class="input-group">
        <label for="photo${i}H">Photo ${i + 1} Height (H):</label>
        <input type="number" id="photo${i}H" placeholder="Height of photo ${i + 1}" required>
      </div>
    `;
  }
});

// Function to evaluate photos
function evaluatePhotos() {
  const L = parseInt(document.getElementById('minDim').value);
  const N = parseInt(document.getElementById('numPhotos').value);
  let result = '';

  // Check each photo's dimensions
  for (let i = 0; i < N; i++) {
    const W = parseInt(document.getElementById(`photo${i}W`).value);
    const H = parseInt(document.getElementById(`photo${i}H`).value);

    if (W < L || H < L) {
      result += 'UPLOAD ANOTHER\n';
    } else if (W === H) {
      result += 'ACCEPTED\n';
    } else {
      result += 'CROP IT\n';
    }
  }

  // Display the result
  document.getElementById('result').innerText = result.trim();
}