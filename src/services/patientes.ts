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
  updatedAt: string;
}

export interface ApiResponse {
  data: PatientApi[];
}

const getPatients = async (): Promise<PatientApi[]> => {
  try {
    const response = await api.get<PatientApi[]>("/paciente");
    // const response: ApiResponse = {
    //   data: [
    //     {
    //       id_paciente: 1,
    //       nome_paciente: "Andersson Costa",
    //       idade_paciente: 29,
    //       dta_nasc_paciente: "10/10/2020",
    //       resp_paciente: "Dra. Tarcianne Maria",
    //       email_paciente: "teste@teste.com",
    //       sexo_paciente: "M",
    //       tel_paciente: "85988574730",
    //       naturalidade: "Maracanau",
    //       cidade: "Maracanau",
    //       bairro: "Pajucara",
    //       cep: "607120340",
    //       endereco: "av pajucara, 23",
    //       created_at: "22/10/2010",
    //     },
    //     {
    //       id_paciente: 2,
    //       nome_paciente: "Fulano Costa",
    //       idade_paciente: 31,
    //       dta_nasc_paciente: "10/10/2023",
    //       resp_paciente: "Dra. Tarcianne Maria",
    //       email_paciente: "fulano@teste.com",
    //       sexo_paciente: "M",
    //       tel_paciente: "85988574730",
    //       naturalidade: "Fortaleza",
    //       cidade: "Fortaleza",
    //       bairro: "Maraponga",
    //       cep: "60711200",
    //       endereco: "tv campo grande, 54",
    //       created_at: "22/10/2010",
    //     },
    //     {
    //       id_paciente: 3,
    //       nome_paciente: "Beltrano Silva Costa",
    //       idade_paciente: 25,
    //       dta_nasc_paciente: "10/10/2022",
    //       resp_paciente: "Dra. Tarcianne Maria",
    //       email_paciente: "beltrano@teste.com",
    //       sexo_paciente: "M",
    //       tel_paciente: "85999996504",
    //       naturalidade: "Fortaleza",
    //       cidade: "Fortaleza",
    //       bairro: "Jose Walter",
    //       cep: "60750210",
    //       endereco: "Av A, 230",
    //       created_at: "22/10/2010",
    //     },
    //   ],
    // };
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar Paciente: " + error);
    throw error;
  }
};

export { getPatients };
