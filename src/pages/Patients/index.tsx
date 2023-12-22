import Contents from "../../components/contents";
import HeaderTitle from "../../components/headerTitle";
import UserProfile from "../../components/userProfile";

import { useEffect, useState } from "react";
import { PatientApi, getPatients } from "../../services/patientes";
import PatientTable from "./PatientTable";

const Patients = () => {
  const [regs, setRegs] = useState<PatientApi[]>([]);
  const [search, setSearch] = useState("");

  const fetchPatients = async () => {
    const response = await getPatients();
    setRegs(response);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Pacientes" />
      </div>
      <div className="flex justify-between items-center mt-4 gap-2">
        <input
          type="text"
          className="w-full rounded-lg h-10 p-2 hover:border-violet-700 hover:border focus:outline-none"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => ({})}
          className="bg-white h-10 border text-violet-600 border-violet-600 rounded-lg px-5"
        >
          Buscar
        </button>
        <button className="bg-violet-600 h-10 text-white rounded-lg px-5">
          Cadastrar
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-10 ">
        <PatientTable data={regs} />
      </div>
    </Contents>
  );
};
export default Patients;
