import Contents from "../../components/contents";
import HeaderTitle from "../../components/headerTitle";
import UserProfile from "../../components/userProfile";

import { useEffect, useState } from "react";
import { PatientApi, getPatients } from "../../services/patientes";
import PatientTable from "./PatientTable";
import { Link } from "react-router-dom";

const Patients = () => {
  const [regs, setRegs] = useState<PatientApi[]>([]);

  const fetchPatients = async () => {
    const response = await getPatients();
    setRegs(response);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Contents>
      <div className="w-[95%] flex-1">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle title="Pacientes" />
        </div>
        <div className="flex justify-end items-center mt-4 gap-2">
          <button
            onClick={() => ({})}
            className="bg-white h-10 border text-blue-600 border-blue-600 rounded-lg px-5"
          >
            Exportar
          </button>
          <Link
            to="cadastrar-paciente"
            className=" flex items-center justify-center bg-blue-600 h-10 text-white rounded-lg px-5"
          >
            Cadastrar
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-10 ">
          <PatientTable data={regs} />
        </div>
      </div>
    </Contents>
  );
};
export default Patients;
