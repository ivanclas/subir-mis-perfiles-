async function subscribePush() {
  const reg = await navigator.serviceWorker.ready;
  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      '<TU_CLAVE_VAPID_PUBLICA>'
    )
  });
  // Envía `sub` a tu servidor para guardar la suscripciones
  console.log('Suscripción push:', JSON.stringify(sub));
}

// Helper para convertir la clave VAPID
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const raw = window.atob(base64);
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
}

Notification.requestPermission().then(permission => {
  if (permission === 'granted') subscribePush();
});
