export interface PatientApi {
  id_paciente: number;
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
  endereco_pct: string;
  created_paciente: string;
}

interface ApiResponse {
  data: PatientApi[];
}

const getPatients = async (): Promise<PatientApi[]> => {
  try {
    const response: ApiResponse = {
      data: [
        {
          id_paciente: 1,
          nome_paciente: "Andersson Costa",
          idade_paciente: 29,
          dta_nasc_paciente: "10/10/2020",
          resp_paciente: "Dra. Tarcianne Maria",
          email_paciente: "teste@teste.com",
          sexo_paciente: "M",
          tel_paciente: "85988574730",
          naturalidade: "Maracanau",
          cidade: "Maracanau",
          bairro: "Pajucara",
          cep: "607120340",
          endereco_pct: "av pajucara, 23",
          created_paciente: "22/10/2010",
        },
        {
          id_paciente: 2,
          nome_paciente: "Fulano Costa",
          idade_paciente: 31,
          dta_nasc_paciente: "10/10/2023",
          resp_paciente: "Dra. Tarcianne Maria",
          email_paciente: "fulano@teste.com",
          sexo_paciente: "M",
          tel_paciente: "85988574730",
          naturalidade: "Fortaleza",
          cidade: "Fortaleza",
          bairro: "Maraponga",
          cep: "60711200",
          endereco_pct: "tv campo grande, 54",
          created_paciente: "22/10/2010",
        },
        {
          id_paciente: 3,
          nome_paciente: "Beltrano Silva Costa",
          idade_paciente: 25,
          dta_nasc_paciente: "10/10/2022",
          resp_paciente: "Dra. Tarcianne Maria",
          email_paciente: "beltrano@teste.com",
          sexo_paciente: "M",
          tel_paciente: "85999996504",
          naturalidade: "Fortaleza",
          cidade: "Fortaleza",
          bairro: "Jose Walter",
          cep: "60750210",
          endereco_pct: "Av A, 230",
          created_paciente: "22/10/2010",
        },
      ],
    };
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar:" + error);
    throw error;
  }
};

export { getPatients };
