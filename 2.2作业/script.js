document.addEventListener('DOMContentLoaded', function() {
  
  const calculateBtn = document.getElementById('calculate-btn');
  const bpmInput = document.getElementById('bpm');
  const resultDiv = document.getElementById('bpm-result');

  calculateBtn.addEventListener('click', function() {
    const bpm = parseFloat(bpmInput.value);

    // Basic Form and Input Validation
    if (!bpm || bpm <= 0 || bpm > 300) {
      resultDiv.innerHTML = "<span style='color: #e74c3c;'>Please enter a valid BPM between 1 and 300!</span>";
      return;
    }

    // Delay time formula: (60 seconds / BPM) * 1000 milliseconds
    const quarterNote = (60 / bpm) * 1000;
    const eighthNote = quarterNote / 2;
    const sixteenthNote = quarterNote / 4;

    // Dynamically inject the calculated values into the target div
    resultDiv.innerHTML = `
      <p style="margin-bottom: 0.5rem; font-weight: normal;">At <strong>${bpm} BPM</strong>, the precise delay intervals are:</p>
      <ul style="list-style-type: none; padding-left: 0; line-height: 1.8;">
        <li>🎵 Quarter Note (1/4): <strong>${quarterNote.toFixed(0)} ms</strong></li>
        <li>🎵 Eighth Note (1/8): <strong>${eighthNote.toFixed(0)} ms</strong></li>
        <li>🎵 Sixteenth Note (1/16): <strong>${sixteenthNote.toFixed(0)} ms</strong></li>
      </ul>
    `;
  });
});