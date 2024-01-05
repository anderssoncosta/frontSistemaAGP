import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contents from "../../../components/contents";
import HeaderTitle from "../../../components/headerTitle";
import UserProfile from "../../../components/userProfile";
import { PatientApi, getPatients } from "../../../services/patientes";
import { FaArrowLeft } from "react-icons/fa";
import Tabs from "../../../components/tabs";
import ContentAnamnesis from "../../../components/contentAnamnesis";
import ContentClinicalRecord from "../../../components/contentClinicalRecord";
import ContentEvolution from "../../../components/contentEvolution";
import ContentQuantityPhysio, {
  TimeEntry,
} from "../../../components/contentQuantityPhysio";
import { toast } from "react-toastify";

const PatientsInfo = () => {
  const { id } = useParams();
  const [currentPatient, setCurrentPatient] = useState<PatientApi | null>(null);

  const fetchPatients = async (patientId: number) => {
    const result = await getPatients();
    const foundPatient = result.find((patient) => patient.id === patientId);
    setCurrentPatient(foundPatient || null);
  };

  useEffect(() => {
    if (id) {
      const patientId = Number(id);
      fetchPatients(patientId);
    }
  }, [id]);

  const [time, setTime] = useState<TimeEntry[]>([]);

  const handlePresencaClick = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    const updatedTime = [...time, { data: formattedDate, hora: formattedTime }];

    setTime(updatedTime);
    toast.success("Paciente Atendido");
  };

  return (
    <Contents>
      <div className="w-[95%]">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle
            iconTitle={<FaArrowLeft size={20} color="#FFF" />}
            title={`Paciente: ${currentPatient?.nome_paciente}`}
          />
        </div>
        {currentPatient && (
          <div className="h-36 flex justify-between items-center bg-white p-4 mt-4 gap-2 rounded-lg">
            <div>
              <h1 className="font-bold">{currentPatient.nome_paciente}</h1>
            </div>
            <div className="flex flex-col justify-between h-full">
              <h1>
                Idade:{" "}
                <span className="font-bold">
                  {currentPatient.idade_paciente}
                </span>
              </h1>
              <h1>
                Paciente:{" "}
                <span className="font-bold">
                  {new Date(currentPatient.updatedAt).toLocaleDateString(
                    "pt-BR"
                  )}
                </span>
              </h1>
              <h1>
                Responsável:{" "}
                <span className="font-bold">
                  {currentPatient.resp_paciente}
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-evenly h-full">
              <h1>
                Telefone:{" "}
                <span className="font-bold">{currentPatient.tel_paciente}</span>
              </h1>
              <h1>
                E-mail:{" "}
                <span className="font-bold">
                  {currentPatient.email_paciente}
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handlePresencaClick}
                className="bg-green-500 text-white px-3 rounded-lg"
              >
                Presente
              </button>
              <button className="bg-red-500 text-white px-3 rounded-lg">
                Falta
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-3 mt-10 ">
          <Tabs
            contentClinicalRecord={<ContentClinicalRecord />}
            contentAnamnesis={<ContentAnamnesis />}
            contentQuantityPhysio={<ContentQuantityPhysio time={time} />}
            contentEvolution={<ContentEvolution />}
          />
        </div>
      </div>
    </Contents>
  );
};

export default PatientsInfo;
