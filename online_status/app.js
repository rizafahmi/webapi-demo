function hideAllAlerts() {
  document.querySelectorAll('.alert').forEach(function(el) {
    el.hidden = true;
  });
}

function disableChat() {
  const button = document.querySelector('button')
  button.disabled = true;
  button.classList.remove('btn-secondary');
  button.classList.add('btn-danger');

}

function enableChat() {
  document.querySelector('button').disabled = false;
  const button = document.querySelector('button')
  button.classList.remove('btn-danger');
  button.classList.add('btn-secondary');
}

hideAllAlerts();

window.addEventListener('offline', showNetworkStatus);
window.addEventListener('online', showNetworkStatus);

function showNetworkStatus(e) {
  switch(e.type) {
    case 'online':
      document.querySelector('.alert-secondary').hidden = false;
      document.querySelector('.alert-danger').hidden = true;
      enableChat();
      break;
    case 'offline':
      document.querySelector('.alert-danger').hidden = false;
      document.querySelector('.alert-secondary').hidden = true;
      disableChat();
      break;
  }
  window.setTimeout(function(){
    hideAllAlerts();
  }, 2500);
}

