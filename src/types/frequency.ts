import { CategoryType } from "./category"

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