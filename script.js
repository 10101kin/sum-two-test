const form = document.getElementById('sum-form');
const firstInput = document.getElementById('first-number');
const secondInput = document.getElementById('second-number');
const feedback = document.getElementById('feedback');

function setFeedback(message, type) {
  feedback.textContent = message;
  feedback.classList.remove('success', 'error');

  if (type) {
    feedback.classList.add(type);
  }
}

function parseInput(input) {
  const value = input.value.trim();

  if (value === '') {
    return { valid: false, value: null, reason: 'empty' };
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return { valid: false, value: null, reason: 'not-number' };
  }

  return { valid: true, value: parsed };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const first = parseInput(firstInput);
  const second = parseInput(secondInput);

  if (!first.valid || !second.valid) {
    setFeedback('Please enter a valid number in both fields before calculating.', 'error');
    return;
  }

  const sum = first.value + second.value;
  setFeedback(`Result: ${sum}`, 'success');
});
