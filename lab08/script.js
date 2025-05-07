// Clear the output display area
function clearOutput() {
  document.getElementById('output').textContent = '';
}

// Append a message to the output area
function log(msg) {
  document.getElementById('output').textContent += msg + '\n';
}

// Track Meditation instance and meditation lock
let meditation = null;
let isMeditating = false; // Used to block other buttons while meditating

// Exercise 1: Countdown Meditation
function runExercise1() {
  const btn1 = document.getElementById('btn-ex1');
  const label1 = document.getElementById('btn-ex1-label');

  const btn2 = document.getElementById('btn-ex2');
  const btn3 = document.getElementById('btn-ex3');

  if (btn1.disabled) return;

  // Disable all buttons during meditation
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;

  label1.textContent = 'Meditating...';
  isMeditating = true;

  clearOutput();

  if (!meditation) {
    meditation = new Meditation(5);
  }

  meditation.start(() => {
    // Re-enable all buttons after meditation
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;

    label1.textContent = 'Run Exercise 1 (Meditation)';
    isMeditating = false;
  });
}

// Exercise 2: Prime number check
async function runExercise2() {
  if (isMeditating) return; // prevent execution during meditation

  const btn = document.getElementById('btn-ex2');
  const label = document.getElementById('btn-ex2-label');

  if (btn.disabled) return;

  btn.disabled = true;
  label.textContent = 'Checking...';

  clearOutput();
  log('start');

  try {
    const result = await isPrime(7);
    log(JSON.stringify(result));
  } catch (err) {
    log('Error: ' + JSON.stringify(err));
  }

  log('end');

  btn.disabled = false;
  label.textContent = 'Run Exercise 2 (isPrime)';
}

// Exercise 3: Fetch recipe names
async function runExercise3() {
  if (isMeditating) return; // prevent execution during meditation

  const btn = document.getElementById('btn-ex3');
  const label = document.getElementById('btn-ex3-label');

  if (btn.disabled) return;

  btn.disabled = true;
  label.textContent = 'Fetching...';

  clearOutput();

  try {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    data.recipes.forEach((recipe) => log(recipe.name));
  } catch (err) {
    log('Fetch error: ' + err.message);
  }

  btn.disabled = false;
  label.textContent = 'Run Exercise 3 (Fetch Recipes)';
}
