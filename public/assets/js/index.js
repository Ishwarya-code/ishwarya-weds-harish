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
  apiKey: "AIzaSyCfodLxsyp8g0YmxM-zSyRBknwv9MMyHVk",
  authDomain: "sriram-uma-6ea92.firebaseapp.com",
  projectId: "sriram-uma-6ea92",
  storageBucket: "sriram-uma-6ea92.appspot.com",
  messagingSenderId: "1069044697867",
  appId: "1:1069044697867:web:a98334d2b4a0789817300e",
  measurementId: "G-PF4D8PECJG"
}
  firebase.initializeApp(firebaseConfig)
  const $analytics = firebase.analytics()
  $analytics.logEvent('Home')
}

document.addEventListener('DOMContentLoaded', () => {
  animate()
  trackAnalytics()
})
