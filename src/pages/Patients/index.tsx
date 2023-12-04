import Contents from "../../components/Contents";
import HeaderTitle from "../../components/HeaderTitle";
import UserProfile from "../../components/UserProfile";

import { IoIosSave } from "react-icons/io";
import { RiEditFill } from "react-icons/ri";
import { BiSolidTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PatientApi, getPatients } from "../../services/patientes";

export default function Patients() {
  const [regs, setRegs] = useState<PatientApi[]>([]);
  const [search, setSearch] = useState("");

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

  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Pacientes" />
      </div>
      <div className="flex justify-between items-center mt-4 gap-2">
        <input
          type="text"
          className="w-full rounded-lg h-10 p-2 hover:border-violet-700 hover:border"
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
        {regs.map((item) => (
          <section className="flex items-center justify-between w-full h-10 bg-white rounded-lg px-3">
            <Link
              to={`/pacientes/${item.id_paciente}/`}
            >{`Nome: ${item.nome_paciente}`}</Link>
            <div className="flex gap-3">
              <Link to="/">
                <IoIosSave size={20} color="#925FE2" />
              </Link>
              <Link to="/">
                <RiEditFill size={20} color="#925FE2" />
              </Link>
              <Link to="/">
                <BiSolidTrash size={20} color="#925FE2" />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </Contents>
  );
}
