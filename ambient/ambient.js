if ('ondevicelight' in window) {
  window.addEventListener('devicelight', function(event) {
    console.log(event.value);
    const body = document.querySelector('body');
    const image = document.querySelector('.ghost');
    if (event.value < 50) {
      body.classList.add('darklight');
      body.classList.remove('brightlight');
      image.classList.add('img-flip');
    } else {
      body.classList.add('brightlight');
      body.classList.remove('darklight');
      image.classList.remove('img-flip');
    }
  });
} else {
  console.log('devicelight event not supported');
}
