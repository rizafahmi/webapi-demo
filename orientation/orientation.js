window.addEventListener('deviceorientation', function (e) {
  console.log(`Alpha: ${e.alpha}`);
  console.log(`Gamma: ${e.gamma}`);
  console.log(`Beta: ${e.beta}`);

  const alpha = document.querySelector("#alpha");
  const beta = document.querySelector("#beta");
  const gamma = document.querySelector("#gamma");

  alpha.texContent = '1';
});
