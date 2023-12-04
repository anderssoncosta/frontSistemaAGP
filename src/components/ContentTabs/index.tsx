import { useState, useEffect } from "react";
import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { PatientApi, getPatients } from "../../services/patientes";
import { useParams } from "react-router-dom";

export const ContentTabs = () => {
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
          <HiAdjustments size={20} /> Quantidade Fisio
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
                  {pacienteAtual.dta_nasc_paciente}
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
              <h1>
                Endereço:{" "}
                <span className="font-semibold">
                  {pacienteAtual.endereco_pct}
                </span>
              </h1>
            </div>
          )}
        </TabPanel>
        <TabPanel>
        <div className="flex flex-col w-full h-full bg-white gap-2 p-4"></div>
        </TabPanel>
        <TabPanel>
          <p>Quantidade Fisio!</p>
        </TabPanel>
        <TabPanel>
          <p>Evolução!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
