import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/firebase/config";
import { CategoriesType } from "@/constants/types";

const db = getFirestore(app)

const dbName = "Categories"
export async function getAllCategories() {
    try {
        const querySnapshot = await getDocs(collection(db, dbName));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function createCategory(data: CategoriesType) {
    try {
        const formattedTrainingDays = data.trainingDays.reduce((acc, day, index) => {
            acc[`day_${index + 1}`] = day.value;
            return acc;
        }, {} as Record<string, string>);

        const formattedTrainingSchedules = data.trainingSchedule.reduce((acc, schedule, index) => {
            acc[`day_${index + 1}`] = schedule.hour;
            return acc;
        }, {} as Record<string, string>);

        const docRef = await addDoc(collection(db, dbName), {
            name: data.name,
            status: data.status,
            training_days: formattedTrainingDays,
            training_schedules: formattedTrainingSchedules,
            createdAt: Date.now().toLocaleString("pt-BR"),
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function deleteCategory(id: string) {
    try {
        await deleteDoc(doc(db, dbName, id));
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function getCategory(id: string) {
    try{
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
        throw new Error(e.message)
    }
}

export async function editCategory(data: CategoriesType, id: string) {
    try {
        const formattedTrainingDays = data.trainingDays.reduce((acc, day, index) => {
            acc[`day_${index + 1}`] = day.value;
            return acc;
        }, {} as Record<string, string>);

        const formattedTrainingSchedules = data.trainingSchedule.reduce((acc, schedule, index) => {
            acc[`day_${index + 1}`] = schedule.hour;
            return acc;
        }, {} as Record<string, string>);

        await setDoc(doc(db, dbName, id), {
            name: data.name,
            status: data.status,
            training_days: formattedTrainingDays,
            training_schedules: formattedTrainingSchedules,
            updatedAt: Date.now().toLocaleString("pt-BR")
        });
        console.log("Document written with ID: ", id);
    } catch (e: any) {
        throw new Error(e.message)
    }
}