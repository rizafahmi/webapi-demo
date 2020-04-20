const video = document.querySelector('video');

window.addEventListener('visibilitychange', async function() {
  switch (document.visibilityState) {
    case 'prerender':
      console.log('Tab is prerendering...');
      await video.play();
      document.querySelector("#favicon").href = "/002-music.png"
      break;
    case 'hidden':
      console.log('Tab is hidden.');
      video.pause();
      document.querySelector("#favicon").href = "/001-pause.png"
      break;
    case 'visible':
      console.log('Tab is focused.');
      await video.play();
      document.querySelector("#favicon").href = "/002-music.png"
      break;
  }
});

window.setInterval(function() {
  const seconds = Math.floor(video.currentTime) + 1;
  document.title = `00:${seconds > 9 ? seconds : `0${seconds}`} Video`;
}, 1000)
