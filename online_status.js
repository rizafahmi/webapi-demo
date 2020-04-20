// Online Status
console.log(navigator.onLine ? 'Online 🎉' : 'Offline 😢' );

window.addEventListener('offline', printNetworkStatus);
window.addEventListener('online', printNetworkStatus);

function printNetworkStatus(e) {
  console.log(e.type);
}
