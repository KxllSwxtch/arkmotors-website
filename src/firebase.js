import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAdyUPUtD4NQexH5DFTwxRchEmwmTQnn10',
	authDomain: 'arkmotros.firebaseapp.com',
	projectId: 'arkmotros',
	storageBucket: 'arkmotros.firebasestorage.app',
	messagingSenderId: '187065725653',
	appId: '1:187065725653:web:412cd24af7a43b1238685c',
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export { firestore, app }
