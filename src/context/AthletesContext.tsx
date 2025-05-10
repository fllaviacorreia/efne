import { AthletesType, AthleteType } from "@/constants/types";
import { createAthleteFirebase, deleteAthleteFirebase, editAthleteFirebase, getAllAthletesFirebase } from "@/firebase/athletes";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const AthletesContex = createContext<AthletesType>({
    athletes: [],

    createAthlete: async () => { },
    editAthlete: async () => { },
    deleteAthlete: async () => { },
})

function AthletesProvider({ children }: any) {
    const [athletes, setAthletes] = useState<AthleteType[]>([])
    const { isAuthenticated, loading } = useAuth();


    const createAthlete = async (data: AthleteType) => {
        try {
            const result = await createAthleteFirebase(data);
            console.log("result", result);
            getAllAthletes();

        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    const getAllAthletes = async () => {
        try{
            const athletesFirebase = await getAllAthletesFirebase();
            
            if(athletesFirebase) setAthletes(athletesFirebase);
            
        } catch (e: any) {
            throw new Error(e.message)
        }

    }

    const editAthlete = async (data: AthleteType, id: string) => {
        try {
            await editAthleteFirebase(data, id);
            const listAtualized = athletes.map((athlete) => {
                if (athlete.id === id) return data;
                return athlete;
            });
            setAthletes(listAtualized);
        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    const deleteAthlete = async (id: string) => {
        try {
            await deleteAthleteFirebase(id);
            const listAtualized = athletes.filter((athlete) => athlete.id !== id);
            setAthletes(listAtualized);
        } catch (e: any) {
            throw new Error(e.message)
        }
    }


    useEffect(() => {
        if(!loading && isAuthenticated) {
            getAllAthletes();
        }
    }, [getAllAthletes, loading, isAuthenticated])

    return (
        <AthletesContex.Provider value={{ athletes, createAthlete, editAthlete, deleteAthlete }}>
            {children}
        </AthletesContex.Provider>
    )
}

const useAthletesContext = () => useContext(AthletesContex);

export {AthletesProvider, useAthletesContext}   