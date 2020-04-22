window.onload = function () {

  navigator.getBattery().then(function (battery) {
    const remaining = document.querySelector('#remaining');

    remaining.textContent = `${Math.floor( battery.dischargingTime / 60 )} minutes`;

    battery.addEventListener('levelchange', function () {
      remaining.textContent = `${Math.floor( battery.discargingTime / 60 )} minutes`;
    });
  });
}
