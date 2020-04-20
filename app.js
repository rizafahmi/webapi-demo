// Page Visibility
window.addEventListener('visibilitychange', function() {
  switch (document.visibilityState) {
    case 'prerender':
      console.log('Tab is prerendering...');
      break;
    case 'hidden':
      console.log('Tab is hidden.');
      break;
    case 'visible':
      console.log('Tab is focused.');
      break;
  }
});


