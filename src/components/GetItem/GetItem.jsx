import { doc, getDoc, getFirestore } from 'firebase/firestore'

function getItem(id) {
    const db = getFirestore()
    const item = doc(db, 'items', id)
    return getDoc(item)
}

export default getItem