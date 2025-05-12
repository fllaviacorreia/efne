import { AthleteType, CategoryType } from "./types";

export const minAge = 4;
export const maxAge = 15;

export const minDate = new Date().getFullYear() - maxAge;
export const maxDate = new Date().getFullYear() - minAge;

export const fullMinDate = new Date(minDate, 0, 1);
export const fullMaxDate = new Date(maxDate, 11, 31);

export const initialValuesAthlete: AthleteType = {
    name: "Atleta 1",
    born: fullMinDate,
    height: "156",
    weight: "47",
    position: "",
    photo: "",
    father: "Pai 1",
    mother: "Mãe 1",
    aditionalInformation: "",
    school: {
      institution: "School 1",
      shift: "matutino",
      year: "4º ano do fundamental",
    },
    status: "matriculado",
    category: "", // Defina o valor inicial apropriado
    contact: {
      city: "Jequié",
      email: "email@email.com",
      is_whatsapp: false,
      neighborhood: "Bairro",
      number: "122",
      phone: "(73) 99999-9999",
      referencePoint: "Referência",
      street: "Rua 1",
      zipCode: "45.203-728",
    },
  };

  
  export const initialValuesCategory: CategoryType = {
    name: "Categoria 1",
    status: "ativo",
    totalAthletes: 0,
    trainingDays: [{
      day: "Domingo",
      trainingSchedule: {
        start: "00:00",
        end: "00:30",
      }
    },
    {
      day: "Segunda-feira",
      trainingSchedule: {
        start: "00:00",
        end: "00:30",
      }
    },
  ]
  };


  export const positions = [
    "Ala esquerda",
    "Ala direita",
    "Atacante",
    "Centroavante",
    "Goleiro",
    "Lateral Esquerda",
    "Lateral Direita",
    "Meio central",
    "Meio esquerda",
    "Meio direita",
    "Ponta esquerda",
    "Ponta eireita",
    "Volante",
    "Zagueiro",
  ]

  export const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

  export const hours = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00", 
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ]

  export const shifts = [
    "Matutino",
    "Vespertino",
    "Noturno",
  ]
  export const years = [
    "1º ano do fundamental",
    "2º ano do fundamental",
    "3º ano do fundamental",
    "4º ano do fundamental",
    "5º ano do fundamental",
    "6º ano do fundamental",
    "7º ano do fundamental",
    "8º ano do fundamental",
    "9º ano do fundamental",
    "1º ano do médio",
    "2º ano do médio",
    "3º ano do médio",
    "1º ano do técnico",
    "2º ano do técnico",
    "3º ano do técnico",
    "1º ano do superior",
    "2º ano do superior",
    "3º ano do superior",
    "4º ano do superior",
    "5º ano do superior",
    "6º ano do superior",
    "7º ano do superior",
    "8º ano do superior",
    "9º ano do superior",
]