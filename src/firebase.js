import firebase from '@firebase/app'
import '@firebase/database'

// ค่า minimum configuration คือ `apiKey` และ `databaseURL`
const config = {
  apiKey: 'AIzaSyBEqQBxMg3M...',
  databaseURL: 'https://...'
}

// คืนค่า firebase application ที่อาจถูก instantiate แล้วหรือ instantiate ใหม่
export default firebase.apps[0] || firebase.initializeApp(config)
