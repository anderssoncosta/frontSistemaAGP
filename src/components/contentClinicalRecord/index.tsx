import { useParams } from "react-router-dom";
import { PatientApi, getPatients } from "../../services/patientes";
import { useEffect, useState } from "react";

const ContentClinicalRecord = () => {
  const { id } = useParams();

  const [regs, setRegs] = useState<PatientApi[]>([]);

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      // console.log(response);
      setRegs(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const pacienteAtual = regs.find((paciente) => paciente.id === Number(id));
  console.log(pacienteAtual);
  return (
    <div>
      {pacienteAtual && (
        <div className="flex flex-col w-full h-full bg-white gap-2 p-4">
          <h1 className="">
            Nome: <span className="font-semibold">{pacienteAtual.name}</span>
          </h1>
          <h1>
            Idade: <span className="font-semibold">{pacienteAtual.age}</span>
          </h1>
          <h1>
            Data Nasc.:{" "}
            <span className="font-semibold">
              {new Date(pacienteAtual.date_birth).toLocaleDateString("pt-BR")}
            </span>
          </h1>
          <h1>
            Tel.: <span className="font-semibold">{pacienteAtual.tel}</span>
          </h1>
          <h1>
            Sexo: <span className="font-semibold">{pacienteAtual.gender}</span>
          </h1>
          <h1>
            Naturalidade:{" "}
            <span className="font-semibold">{pacienteAtual.naturalness}</span>
          </h1>
          <h1>
            Endereço:{" "}
            <span className="font-semibold">{pacienteAtual.address}</span>
          </h1>
          <div className="w-8/12 flex justify-between">
            <h1>
              Cidade:{" "}
              <span className="font-semibold">{pacienteAtual.city}</span>
            </h1>
            <h1>
              Bairro:{" "}
              <span className="font-semibold">{pacienteAtual.district}</span>
            </h1>
            <h1>
              Cep: <span className="font-semibold">{pacienteAtual.zipcode}</span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default ContentClinicalRecord;
