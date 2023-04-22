const animate = () => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.utils.toArray("section").forEach((panel, i) => {
    gsap.from(panel.querySelectorAll('.animate'), {
      opacity: 0,
      yPercent: 40,
      duration: 2,
      scrollTrigger: {
        trigger: panel,
        start: "top 50%"
      }
    })
  })
}

const trackAnalytics = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAPTboB9sPZi0IxNgMxLZ7LPEKD_qpZXYQ",
    authDomain: "ishwarya-weds-harish.firebaseapp.com",
    projectId: "ishwarya-weds-harish",
    storageBucket: "ishwarya-weds-harish.appspot.com",
    messagingSenderId: "371869057066",
    appId: "1:371869057066:web:090cc837058bf133a94353",
    measurementId: "G-VE3FYEWR9Z"
}
  firebase.initializeApp(firebaseConfig)
  const $analytics = firebase.analytics()
  $analytics.logEvent('Home')
}

document.addEventListener('DOMContentLoaded', () => {
  animate()
  trackAnalytics()
})
