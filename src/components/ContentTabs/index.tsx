import { useState, useEffect } from "react";
import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { PatientApi, getPatients } from "../../services/patientes";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BiTrash } from "react-icons/bi";

interface TimeEntry {
  data: string;
  hora: string;
}

const ContentTabs = () => {
  const { id } = useParams();
  const [regs, setRegs] = useState<PatientApi[]>([]);
  const [time, setTime] = useState<TimeEntry[]>([]);

  const handlePresencaClick = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    const updatedTime = [...time, { data: formattedDate, hora: formattedTime }];

    setTime(updatedTime);
    toast.success("Paciente Atendido");
  };

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      console.log(response);
      setRegs(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const pacienteAtual = regs.find((paciente) => paciente.id === Number(id));
  return (
    <Tabs variant="enclosed">
      <TabList className="gap-5">
        <Tab className="w-48 h-10 gap-2 rounded-t-lg bg-white font-semibold text-violet-700 hover:bg-violet-700 hover:text-white focus-within:bg-violet-700 focus-within:text-white ">
          <HiUserCircle size={20} />
          Ficha Clínica
        </Tab>
        <Tab className="w-48 h-10 gap-2 rounded-t-lg bg-white font-semibold text-violet-700 hover:bg-violet-700 hover:text-white focus-within:bg-violet-700 focus-within:text-white">
          <MdDashboard size={20} />
          Anamnese
        </Tab>
        <Tab className="w-48 h-10 gap-2 rounded-t-lg bg-white font-semibold text-violet-700 hover:bg-violet-700 hover:text-white focus-within:bg-violet-700 focus-within:text-white">
          <HiAdjustments size={20} />
          Quantidade Fisio
        </Tab>
        <Tab className="w-48 h-10 gap-2 rounded-t-lg bg-white font-semibold text-violet-700 hover:bg-violet-700 hover:text-white focus-within:bg-violet-700 focus-within:text-white">
          <HiClipboardList size={20} />
          Evolução
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {pacienteAtual && (
            <div className="flex flex-col w-full h-full bg-white gap-2 p-4">
              <h1 className="">
                Nome:{" "}
                <span className="font-semibold">
                  {pacienteAtual.nome_paciente}
                </span>
              </h1>
              <h1>
                Idade:{" "}
                <span className="font-semibold">
                  {pacienteAtual.idade_paciente}
                </span>
              </h1>
              <h1>
                Data Nasc.:{" "}
                <span className="font-semibold">
                  {new Date(pacienteAtual.dta_nasc_paciente).toLocaleDateString(
                    "pt-BR"
                  )}
                </span>
              </h1>
              <h1>
                Tel.:{" "}
                <span className="font-semibold">
                  {pacienteAtual.tel_paciente}
                </span>
              </h1>
              <h1>
                Sexo:{" "}
                <span className="font-semibold">
                  {pacienteAtual.sexo_paciente}
                </span>
              </h1>
              <h1>
                Naturalidade:{" "}
                <span className="font-semibold">
                  {pacienteAtual.naturalidade}
                </span>
              </h1>
              <h1>
                Endereço:{" "}
                <span className="font-semibold">{pacienteAtual.endereco}</span>
              </h1>
              <div className="w-8/12 flex justify-between">
                <h1>
                  Cidade:{" "}
                  <span className="font-semibold">{pacienteAtual.cidade}</span>
                </h1>
                <h1>
                  Bairro:{" "}
                  <span className="font-semibold">{pacienteAtual.bairro}</span>
                </h1>
                <h1>
                  Cep:{" "}
                  <span className="font-semibold">{pacienteAtual.cep}</span>
                </h1>
              </div>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col w-full h-[450px] h-max-[450px] bg-white gap-5 p-4 overflow-auto ">
            <div className="flex">
              <h1 className="font-semibold ">Queixa Principal:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Historia Clínica:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Hábitos de Vida:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">HMA:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">HMP:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Antecedentes Pessoais:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Antecedentes Familiares:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas.`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Tratamentos Realizados:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas.`}</span>
            </div>
            <div className="w-4/5 flex justify-between">
              <div className="flex gap-1">
                <h1 className="font-semibold">Usa Medicamentos: </h1>
                <div className="flex gap-2">
                  <span className="font-semibold ml-1">Sim</span>
                  <input type="checkbox" name="Sim" id="" />|
                  <span className="font-semibold ml-1">Não</span>
                  <input type="checkbox" name="Não" id="" />
                </div>
              </div>
              <div className="flex gap-1">
                <h1 className="font-semibold">Realizou Cirurgia: </h1>
                <div className="flex gap-2">
                  <span className="font-semibold ml-1">Sim</span>
                  <input type="checkbox" name="Sim" id="" />|
                  <span className="font-semibold ml-1">Não</span>
                  <input type="checkbox" name="Não" id="" />
                  <div className="flex"></div>
                </div>
              </div>
            </div>
            <h1 className="font-semibold">Plano Terapêutico</h1>
            <div className="flex">
              <h1 className="font-semibold">Objetivo do tratamento:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Recursos Terapêuticos:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Plano de Tratamento:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <h1 className="font-semibold">Plano Terapêutico</h1>
            <div className="flex">
              <h1 className="font-semibold">Objetivo do tratamento:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Recursos Terapêuticos:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
            <div className="flex">
              <h1 className="font-semibold">Plano de Tratamento:</h1>
              <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col item w-full min-h-[400px] h-[400px] bg-white gap-2 p-4 overflow-auto">
            {time.map((entry, index) => (
              <div
                key={index}
                className="bg-violet-300 flex justify-between h-10 p-1 rounded-lg px-2 py-5"
              >
                <div className="flex items-center gap-1">
                  <h1 className="text-white">Data:</h1>
                  <span className="text-white font-bold">{entry.data}</span>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="text-white">Horario:</h1>
                  <span className="text-white font-bold">{entry.hora}</span>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="text-white">Assinatura:</h1>
                  <input type="text" className="h-7 rounded-lg p-1" />
                </div>
                <div className="flex items-center">
                  <BiTrash size={20} color="#FFF" />
                </div>
              </div>
            ))}
            <button
              onClick={handlePresencaClick}
              className="text-white bg-violet-500 rounded-lg font-bold h-8"
            >
              Emitir Ficha de Presença
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col w-full h-full bg-white gap-2 p-4">
            <h1>Evolução</h1>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default ContentTabs;
