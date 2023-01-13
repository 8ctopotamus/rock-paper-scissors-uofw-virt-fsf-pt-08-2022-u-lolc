export function registerSW() {
  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('service-worker.js')
        .then(registration => {
          console.log('Service worker registered!')
          console.log(registration)
        })
        .catch(error => {
          console.log('Error registering Service worker')
          console.log(error)
        })
    } else {
      console.log('Sorry, your browser does not support Service Worker')
    }
  })
}