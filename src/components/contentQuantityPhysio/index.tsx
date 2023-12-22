import { BiTrash } from "react-icons/bi";

export interface TimeEntry {
  data: string;
  hora: string;
}

const ContentQuantityPhysio = ({ time }: { time: TimeEntry[] }) => {
  return (
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
      <button className="text-white bg-violet-500 rounded-lg font-bold h-8">
        Emitir Ficha de Presença
      </button>
    </div>
  );
};
export default ContentQuantityPhysio;
