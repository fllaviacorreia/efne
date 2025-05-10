import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { app } from "@/firebase/config";
import { CategoryType } from "@/constants/types";
import { getCurrentUser } from "./authentication";

const db = getFirestore(app)

const dbName = "Categories"

export async function getAllCategoriesFirebase() {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        throw new Error("Usuário não autenticado.");
    }


    try {
        const categoriesCollection = collection(db, dbName);
        const querySnapshot = await getDocs(categoriesCollection);

        const data: CategoryType[] = querySnapshot.docs.map((doc) => {
       
            return { 
                id: doc.id,
                ...doc.data(),
            } as CategoryType;
        });

        return data;

    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function createCategoryFirebase(data: CategoryType) {
    try {
        const docRef = await addDoc(collection(db, dbName), {
            ...data,
            createdAt: serverTimestamp(),
        });

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docRef.id, ...docSnap.data() } as CategoryType;
        } else {
            throw new Error("Document does not exist.");
        }
    } catch (e: any) {
        throw new Error(e.message);
    }
}


export async function deleteCategoryFirebase(id: string) {
    try {
        await deleteDoc(doc(db, dbName, id));
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function getCategoryFirebase(id: string) {
    try {
        const docRef = doc(db, dbName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function editCategoryFirebase(data: CategoryType, id: string) {
    try {

        await setDoc(doc(db, dbName, id), {
            ...data,
            updatedAt: Date.now().toLocaleString("pt-BR")
        });
        console.log("Document written with ID: ", id);
    } catch (e: any) {
        throw new Error(e.message)
    }
}