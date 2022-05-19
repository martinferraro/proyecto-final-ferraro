import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

function getProducts(category) {
    const db = getFirestore();

    const itemCollection = collection(db, 'items')

    const q = category ? query(itemCollection, where('category', '==', category)) : query(itemCollection)

    return getDocs(q)
};

export default getProducts