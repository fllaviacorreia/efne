import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./config";
import { userType } from "@/constants/types";

const db = getFirestore(app)

export async function createUser(data: userType) {
    try {
        const docRef = await addDoc(collection(db, "Users"), {
            ...data,
            createdAt: Date.now().toLocaleString("pt-BR")
        });

        console.log("Document written with ID: ", docRef.id);

    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function editUser(data: userType) {
    try {
        await setDoc(doc(db, "Users", data.loginId), {
            ...data,
            updatedAt: Date.now().toLocaleString("pt-BR")
        });

        console.log("Document written with ID: ", data.loginId);
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function deleteUser(id: string) {
    try {
        await deleteDoc(doc(db, "Users", id));
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function getUser(id: string) {
    try{
        const docRef = doc(db, "Users", id);
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

export async function getAllUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (e: any) {
        throw new Error(e.message)
    }
}