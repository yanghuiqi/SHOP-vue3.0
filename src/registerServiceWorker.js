import {
  register
} from 'register-service-worker'


if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready(e) {
      console.log('App is being served from cache by a service worker.For more details', e, this)
    },
    cached(e) {
      console.log('Content has been cached for offline use.', e, this)
    },
    updated(e) {
      console.log('New content is available; please refresh.', e, this)
    },
    offline(e) {
      console.log('No internet connection found. App is running in offline mode.')
      console.log(this, "离线状态", register, e)
    },
    error(error) {
      console.log('Error during service worker registration:', error, this, register)
    }
  })
}
