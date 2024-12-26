
export type userType = {
    name: string,
    gender: "feminino" | "masculino" | "outro",
    username: string,
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
    value: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta" | "Sábado" | "Domingo",
}

export type TrainingScheduleType = {
    day: string,
    hour: string,
}

export type CategoriesType = {
    name: string,
    status: "ativo" | "inativo",
    trainingDays: TrainingDayType[],
    trainingSchedule: TrainingScheduleType[],
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