navigator.getBattery().then(function (battery) {
  const batteryStatus = document.querySelector('#battery');
  const percent = document.getElementById("progress").innerHTML;
  console.log(battery.level)

  document.querySelector(".progress").innerHTML = percent.replace(/{{percentage}}/g, `${Math.floor(battery.level * 100)}`)

  console.log(`${battery.level * 100}%`);
  batteryStatus.innerHTML = `${Math.floor( battery.level * 100 )}%`;


  battery.addEventListener('levelchange', function () {
    console.log(`${this.level * 100}%`);
    batteryStatus.innerHTML = `${Math.floor( battery.level * 100 )}%`;
  });

});
