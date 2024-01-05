import api from "./api";

export interface QuestionProps {
  id: number;
  pergunta: string;
}

export interface TipoFicha {
  id: number;
  nome: string;
}

export interface QuestionApi {
  id: number;
  nome: string;
  tipoFichaId: number;
  tipoFicha: TipoFicha;
  perguntas: QuestionProps[];
}

const getQuestions = async (): Promise<QuestionApi[]> => {
  try {
    const response = await api.get<QuestionApi[]>("/tipoFicha");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar ficha: " + error);
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postPatiente = async (obj: any) => {
  try {
    const response = await api.post<QuestionApi[]>(`/tipoFicha`, obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Erro ao cadastrar ficha: " + error);
  }
};

// const deletePatient = async (id: number) => {
//   try {
//     await api.delete(`/tipoFicha/${id}`);
//     return true;
//   } catch (error) {
//     console.log("Erro ao deletar Paciente: " + error);
//   }
// };

export { getQuestions, postPatiente };
