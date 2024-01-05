/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export interface PatientApi {
  id: number;
  nome_paciente: string;
  idade_paciente: number;
  dta_nasc_paciente: string;
  resp_paciente: string;
  email_paciente: string;
  sexo_paciente: string;
  tel_paciente: string;
  naturalidade: string;
  cidade: string;
  bairro: string;
  cep: string;
  endereco: string;
  tipoFichaId: number;
  tipoFicha?: { ficha: string }[];
  updatedAt: string;
  tipoFichaQuestions?: { pergunta: string }[];
}

export interface ApiResponse {
  data: PatientApi[];
}


const getPatients = async (): Promise<PatientApi[]> => {
  try {
    const response = await api.get<PatientApi[]>("/paciente");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar Paciente:", error);
    throw error;
  }
};

const postPatient = async (obj: any): Promise<PatientApi[]> => {
  try {
    const response = await api.post<PatientApi[]>("/paciente", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Resposta do servidor (postPatient):", response);
    return response.data;
  } catch (error) {
    console.log("Erro ao cadastrar Paciente:", error);
    throw error;
  }
};

const deletePatient = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/paciente/${id}`);
    return true;
  } catch (error) {
    console.log("Erro ao deletar Paciente:", error);
    throw error;
  }
};

export { getPatients, postPatient, deletePatient };
