// 1. User interaction is REQUIRED!

const button = document.querySelector('#copy');

button.addEventListener('click', async function() {
  select();
  copy();
});

// 2. Select content of the element, programmatically
function select() {
  const text = document.querySelector('#source');

  text.focus();
  text.setSelectionRange(0, text.value.length);
}

// 3. Copy selected element text
function copy() {
  try {
    document.execCommand('copy');
  } catch(err) {
    console.error(err);
  }
}

const pasteButton = document.querySelector('#paste');
const destination = document.querySelector('#destination');

pasteButton.addEventListener('click', async function() {
  destination.value = '';
  const text = await navigator.clipboard.readText();
  destination.value = text;
});
