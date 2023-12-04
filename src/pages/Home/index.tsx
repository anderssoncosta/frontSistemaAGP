import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Contents from "../../components/Contents";
import ModalContents from "../../components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Contents>
      <main className="w-full h-[calc(100vh-350px)]">
        <div>
          <UserProfile />
          <Header />
        </div>
        <div className="w-full h-full">
          <div className="h-12 mt-4">
            <h1 className="font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center justify-evenly gap-2 xl:justify-between">
            <Link
              to="/agenda"
              className="w-60 h-40 rounded-lg bg-white flex flex-col items-center justify-center gap-3 hover:border-2 hover:border-violet-700 xl:w-72 xl:h-52 lg:w-80 lg:h-52"
            >
              <FaUserClock size={50} color="#925FE2" />
              <div className="flex flex-col items-center">
                <p className="font-bold">30</p>
                <span className="text-gray-400 font-light ">Agendados</span>
              </div>
            </Link>
            <Link
              to="/"
              className="w-60 h-40 rounded-lg bg-white flex flex-col items-center justify-center gap-3 hover:border-2 hover:border-violet-700 xl:w-72 xl:h-52 lg:w-80 lg:h-52"
            >
              <FaUserCheck size={50} color="#925FE2" />
              <div className="flex flex-col items-center">
                <p className="font-bold">30</p>
                <span className="text-gray-400 font-light ">Atendidos</span>
              </div>
            </Link>
            <Link
              to="/pacientes"
              className="w-60 h-40 rounded-lg bg-white flex flex-col items-center justify-center gap-3 hover:border-2 hover:border-violet-700 xl:w-72 xl:h-52 lg:w-80 lg:h-52"
            >
              <FaUserPlus size={50} color="#925FE2" />
              <div className="flex flex-col items-center">
                <p className="font-bold">150</p>
                <span className="text-gray-400 font-light ">Cadastrados</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <button onClick={openModal}>Abre modal</button>
      <ModalContents isOpen={isModalOpen} onClose={closeModal}>
        

        {/* <p className="text-lg font-bold mb-4">This is a Modal</p> */}
        {/* <p>This is the modal content. You can add any content here.</p> */}
      </ModalContents>
    </Contents>
  );
}
