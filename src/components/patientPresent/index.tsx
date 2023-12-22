import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

interface TimeEntry {
  data: string;
  hora: string;
}

const PatientPresent = () => {
  const [time, setTime] = useState<TimeEntry[]>([]);

  const handlePresencaClick = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    const updatedTime = [...time, { data: formattedDate, hora: formattedTime }];

    setTime(updatedTime);
    toast.success("Paciente Atendido");
  };

  return (
    <>
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
    </>
  );
};

export default PatientPresent;
