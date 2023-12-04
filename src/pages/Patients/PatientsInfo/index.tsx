import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contents from "../../../components/Contents";
import HeaderTitle from "../../../components/HeaderTitle";
import UserProfile from "../../../components/UserProfile";
import { PatientApi, getPatients } from "../../../services/patientes";
import { ContentTabs } from "../../../components/ContentTabs";

export default function PatientsInfo() {
  const { id } = useParams();
  const [regs, setRegs] = useState<PatientApi[]>([]);

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      setRegs(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const pacienteAtual = regs.find(
    (paciente) => paciente.id_paciente === Number(id)
  );

  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title={`Paciente: ${pacienteAtual?.nome_paciente}`} />
      </div>
      {pacienteAtual && (
        <div className="h-36 flex justify-between items-center bg-white p-4 mt-4 gap-2 rounded-lg">
          <div>
            <h1 className="font-bold">{pacienteAtual.nome_paciente}</h1>
          </div>
          <div className="flex flex-col justify-between h-full">
            <h1>
              Idade:{" "}
              <span className="font-bold">{pacienteAtual.idade_paciente}</span>
            </h1>
            <h1>
              Paciente:{" "}
              <span className="font-bold">
                {pacienteAtual.created_paciente}
              </span>
            </h1>
            <h1>
              Responsável:{" "}
              <span className="font-bold">{pacienteAtual.resp_paciente}</span>
            </h1>
          </div>
          <div className="flex flex-col justify-evenly h-full">
            <h1>
              Telefone:{" "}
              <span className="font-bold">{pacienteAtual.tel_paciente}</span>
            </h1>
            <h1>
              E-mail:{" "}
              <span className="font-bold">{pacienteAtual.email_paciente}</span>
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-green-500 text-white px-3 rounded-lg">
              Presente
            </button>
            <button className="bg-red-500 text-white px-3 rounded-lg">
              Falta
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-3 mt-10 ">
        <ContentTabs />
      </div>
    </Contents>
  );
}
