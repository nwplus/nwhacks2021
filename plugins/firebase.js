import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
    authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NUXT_ENV_FIREBASE_DATABASE_URL,
    projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
    measurementId: 'G-RLRSC8S2SH'
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()

const HACKATHONS = 'Hackathons'
const HACKATHON_ID = 'LHD2021'

firebase.analytics()

const fireDb = {
  getCollection: async (collection) => {
    let ref, data
    if (collection.toUpperCase() === 'FAQ') {
      ref = db.collection('FAQ')
        .where('hackathonIDs', 'array-contains', HACKATHON_ID)
    } else {
      ref = db.collection(HACKATHONS)
        .doc(HACKATHON_ID)
        .collection(collection)
    }
    data = await ref.get()
    data = data.docs.map(doc => doc.data())
    return data
  },
  getWebsiteData: async () => {
    const ref = db.collection(HACKATHONS).doc(HACKATHON_ID)
    const data = await ref.get()
    return data.data()
  }
}

export default fireDb
