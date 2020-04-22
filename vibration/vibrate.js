const button = document.querySelector('#vibrateButton');

button.addEventListener('click', vibrate);

function vibrate() {
  if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate) {
    // Vibrate for a second.
    navigator.vibrate(1000);

    // Vibrate with a pattern
    navigator.vibrate([400, 300, 300, 200, 500]);

    // Turn off vibration
    navigator.vibrate(0);

    // Super Mario
    navigator.vibrate([125,75,125,275,200,275,125,75,125,275,200,600,200,600]);

    // Star Wars
    navigator.vibrate([500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]);

    // Power Rangers
    navigator.vibrate([150,150,150,150,75,75,150,150,150,150,450]);

  } else {
    alert('cannot vibrate on this device');
  }
}

// form
function hideAllAlerts() {
  document.querySelectorAll('.alert').forEach(function(el) {
    el.hidden = true;
  });
}

hideAllAlerts();

const form = document.querySelector("#form");
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("submit")

  const name = document.querySelector('input[name="name"]').value
  if (name === '') {
    if (navigator.vibrate) {
      navigator.vibrate(600);
    }
    document.querySelector('.alert').hidden = false;
  }

});
