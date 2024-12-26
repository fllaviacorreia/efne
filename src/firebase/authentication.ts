
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app)

export async function registerFirebase(email: string, password: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message); // Lançando erro para tratamento no login
    }
}

export async function loginFirebase(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message); // Lançando erro para tratamento no login
    }
}