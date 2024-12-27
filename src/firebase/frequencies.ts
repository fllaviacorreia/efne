import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/firebase/config";
import { FrequenciesType } from "@/constants/types";

const db = getFirestore(app)

export async function getAllFrequencies() {
    try {
        const querySnapshot = await getDocs(collection(db, "Frequencies"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function getFrequency(id: string) {
    try {
        const docRef = doc(db, "Frequencies", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function createFrequency(data: FrequenciesType) {
    try {
        const docRef = await addDoc(collection(db, "Frequencies"), { 
            ...data, 
            createdAt: Date.now().toLocaleString("pt-BR") 
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function editFrequency(data: FrequenciesType, id: string) {
    try {
        await setDoc(doc(db, "Frequencies", id), {
            ...data,
            updatedAt: Date.now().toLocaleString("pt-BR")
        });
        console.log("Document written with ID: ", id);
    } catch (e: any) {
        throw new Error(e.message)
    }
}


export async function deleteMFrequency(id: string) {
    try {
        await deleteDoc(doc(db, "Frequencies", id));
    } catch (e: any) {
        throw new Error(e.message)
    }
}

