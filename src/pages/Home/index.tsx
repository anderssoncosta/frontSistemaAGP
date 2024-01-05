import Header from "../../components/header";
import UserProfile from "../../components/userProfile";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Contents from "../../components/contents";
import ModalContents from "../../components/modal";
import { useState } from "react";
import RegisterPatient from "../Patients/registerPatient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Contents>
      <main className="w-[95%] flex-1">
        <div className="w-full">
          <UserProfile />
          <Header />
        </div>
        <div className="flex-1">
          <div className="h-12 mt-4">
            <h1 className="font-bold ">Dashboard</h1>
          </div>
          <div className="flex items-center justify-evenly gap-2 xl:justify-between">
            <Link
              to="/agenda"
              className="w-60 h-40 rounded-lg bg-white flex flex-col items-center justify-center gap-3 hover:border-2 hover:border-violet-700 xl:w-72 xl:h-52 lg:w-80 lg:h-52"
            >
              <FaUserClock size={50} color="#3b82f6" />
              <div className="flex flex-col items-center">
                <p className="font-bold">30</p>
                <span className="text-gray-400 font-light ">Agendados</span>
              </div>
            </Link>
            <Link
              to="/"
              className="w-60 h-40 rounded-lg bg-white flex flex-col items-center justify-center gap-3 hover:border-2 hover:border-violet-700 xl:w-72 xl:h-52 lg:w-80 lg:h-52"
            >
              <FaUserCheck size={50} color="#3b82f6" />
              <div className="flex flex-col items-center">
                <p className="font-bold">30</p>
                <span className="text-gray-400 font-light ">Atendidos</span>
              </div>
            </Link>
            <Link
              to="/pacientes"
              className="w-60 h-40 rounded-lg bg-white flex flex-col items-center justify-center gap-3 hover:border-2 hover:border-violet-700 xl:w-72 xl:h-52 lg:w-80 lg:h-52"
            >
              <FaUserPlus size={50} color="#3b82f6" />
              <div className="flex flex-col items-center">
                <p className="font-bold">150</p>
                <span className="text-gray-400 font-light ">Cadastrados</span>
              </div>
            </Link>
          </div>
        </div>
        <button onClick={handleOpenModal}>Abrir</button>
        <ModalContents
          titleModal="Cadastro de Paciente"
          onClose={handleCloseModal}
          isOpen={modalIsOpen}
        >
          <RegisterPatient />
        </ModalContents>
      </main>
    </Contents>
  );
};
export default Home;
