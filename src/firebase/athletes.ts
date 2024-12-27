import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/firebase/config";
import { AthleteType } from "@/constants/types";

const db = getFirestore(app)

const dbName = "Athetes"
export async function getAllAthletes() {
    try {
        const querySnapshot = await getDocs(collection(db, dbName));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function getAthlete(id: string) {
    try {
        const docRef = doc(db, dbName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (e: any) {

    }
}

export async function createAthlete(data: AthleteType) {
    try {
        const docRef = await addDoc(collection(db, dbName), {
            ...data,
            createdAt: Date.now().toLocaleString("pt-BR")
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function editAthlete(data: AthleteType, id: string) {
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


export async function deleteAthlete(id: string) {
    try {
        await deleteDoc(doc(db, dbName, id));
    } catch (e: any) {
        throw new Error(e.message)
    }
}