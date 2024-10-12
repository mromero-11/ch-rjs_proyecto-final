import { app } from './config'
import { 
    getFirestore, 
    collection,  
    query, 
    where,
    doc,
    getDoc,
    getDocs 
} from "firebase/firestore"

const db = getFirestore(app)

export const getProducts = async (setProducts) => {
    const products = []
    
    const querySnap = await getDocs(collection(db, "items"))
    
    querySnap.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)
}

export const getProductsByGenre = async (genre, setProducts) => {
    const products = []

    const itemsRef = collection(db, "items")
    const q = query(itemsRef, where("genre", "==", genre))

    const querySnap = await getDocs(q)

    querySnap.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)
}

export const getProduct = async (id, setProduct) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setProduct(docSnap.data())
    }
}
