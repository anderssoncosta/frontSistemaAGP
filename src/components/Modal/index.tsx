import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  titleModal: string;
}

const ModalContents = ({
  isOpen,
  onClose,
  children,
  titleModal,
}: ModalProps) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={`${modalClasses} bg-gray-500 bg-opacity-75`}>
      <div className="bg-white p-6 rounded-lg shadow-md max-h-screen">
        <div className="flex items-center justify-between">
          <h1 className="bg-blue-500 text-lg font-semibold text-white px-3 py-1 rounded-lg">
            {titleModal}
          </h1>
          <button
            onClick={onClose}
            className="h-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            <MdClose color="#FFF" size={20} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default ModalContents;
