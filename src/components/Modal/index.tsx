import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalContents = ({ isOpen, onClose, children }: ModalProps) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={`${modalClasses} bg-gray-500 bg-opacity-75`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <h1>Cadastro de Paciente</h1>
          <button
            onClick={onClose}
            className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
          >
            X
          </button>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <span>Nome</span>
            <input
              className="border border-violet-700 rounded-lg p-1"
              type="text"
              placeholder="Nome do Paciente"
            />
          </div>
          <div className="flex gap-2 items-center">
            <span>Data de Nasc.:</span>
            <input
              className="border border-violet-700 rounded-lg p-1"
              type="text"
              placeholder="Data de Nascimento"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default ModalContents;
