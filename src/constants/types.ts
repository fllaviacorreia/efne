import { Timestamp } from "firebase/firestore"

export type userType = {
    name: string,
    gender: "feminino" | "masculino" | "outro",
    username: string,
    password?: string,
    born: Date,
    status: "ativo" | "inativo",
    slug: "master" | "administrador" | "treinador" | "responsavel",
    loginId: string
}

export type loginType = {
    username: string,
    password: string,
    keepConnected: boolean,
}

export type registerType = {
    name: string,
    born: string,
    gender: string,
    slug: string,
    username: string,
    password: string,
}

export type AuthContextType = {
    loading: boolean,
    isAuthenticated: boolean,
    isFirstAccess: boolean,
    keepConnected: boolean,

    user: userType,

    login: ({ }: loginType) => Promise<void>,
    register: ({ }: registerType) => Promise<void>,
    forgotPassword: (username: string) => Promise<void>,
    resetPassword: (username: string, password: string, passwordConfirm: string) => Promise<void>,
    logout: () => Promise<void>,
    editProfile: () => Promise<void>,
}

export type ThemeContextType = {
    theme: string,
    toggleTheme: () => void,
}

export type GenderType = {
    value: string,
    label: string,
}

export type PaymentType = {
    type: "doação" | "rifa" | "outro",
    value: number,
    description: string,
}
export type OutType = {
    removed_by: string,
    value: number,
    description: string,
}

export type TrainingDayType = {
    day: "Segunda-feira" | "Terça-feira" | "Quarta-feira" | "Quinta-feira" | "Sexta-feira" | "Sábado" | "Domingo",
    trainingSchedule: TrainingScheduleType,
}

export type TrainingScheduleType = {
    start: string,
    end: string,
}

export type CategoryType = {
    id?: string,
    name: string,
    status: "ativo" | "inativo",
    totalAthletes: number,
    trainingDays: TrainingDayType[],
    createdAt?: Timestamp,
    updatedAt?: string,
}

export type Months = {
    value: "Janeiro" | "Fevereiro" | "Março" | "Abril" | "Maio" | "Junho" | "Julho" | "Agosto" | "Setembro" | "Outubro" | "Novembro" | "Dezembro",
    year: number,
}

export type MonthlyFeeType = {
    athlete: string,
    value: number,
    references: Months[]
}

export type FrequencyType = {
    athlete: string,
    was_present: boolean,
}

export type FrequenciesType = {
    athletes: FrequencyType[],
    category: CategoryType,
    date: Date
    time: string
}

export type ContactAthleteType = {
    email?: string,
    phone: string,
    is_whatsapp: boolean,
    city: string,
    neighborhood: string,
    number: string,
    street: string,
    referencePoint ?: string,
    zipCode?: string
}

export type SchoolDataAthleteType = {
    institution: string,
    shift: "matutino" | "verpertino" | "noturno" | "integral",
    year: string,
}

export type AthleteType = {
    id?: string,
    photo?: string,
    name: string,
    born: Date,
    height: string,
    weight: string,
    position: string,
    status: "matriculado" | "ativo" | "inativo",
    father: string,
    mother: string,
    aditionalInformation: string,
    school: SchoolDataAthleteType,
    category: string,
    contact: ContactAthleteType,
    createdAt?: Date,
    updatedAt?: Timestamp,
}

export type AthletesType = {
    athletes: AthleteType[],

    createAthlete: (data: AthleteType) => Promise<void>,
    editAthlete: (data: AthleteType, id: string) => Promise<void>,
    deleteAthlete: (id: string) => Promise<void>,
}

export type CategoriesContextType = {
    categories: CategoryType[],
    createCategory: (data: CategoryType) => Promise<void>,
    getAllCategories: () => Promise<void>,
    getOneCategory: (id: string) => Promise<CategoryType | undefined>,
    editCategory: (data: CategoryType, id: string) => Promise<void>,
    deleteCategory: (id: string) => Promise<void>,
}