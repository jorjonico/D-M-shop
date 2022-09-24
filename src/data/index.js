import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";

    const firebaseConfig = {
        apiKey: "AIzaSyDDO7ZUJu8NY5-fSb1Pt-AC9S7bhwHTGAI",
        authDomain: "dym-shop.firebaseapp.com",
        projectId: "dym-shop",
        storageBucket: "dym-shop.appspot.com",
        messagingSenderId: "844880901422",
        appId: "1:844880901422:web:9a41cd8d56a5347f69b6bf"
    };

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems(){
    const miColec = collection (firestoreDB, 'products');
    const productsSanp = await getDocs(miColec);

    return productsSanp.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemColor(categoryId){
    const miColec = collection (firestoreDB, 'products');
    const queryProduct = query (miColec, where("color", "==", categoryId ));
    const productsSanp = await getDocs(queryProduct);

    return productsSanp.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemOferta(categoryId){
    const miColec = collection (firestoreDB, 'products');
    const queryProduct = query (miColec, where("categoryId", "==", categoryId ));
    const productsSanp = await getDocs(queryProduct);

    return productsSanp.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItem(id){
    const miColec = collection (firestoreDB, 'products');
    const productRef = doc(miColec, id);
    const productSnap = await getDoc(productRef);

    return { ...productSnap.data(), id: productSnap.id };
}

