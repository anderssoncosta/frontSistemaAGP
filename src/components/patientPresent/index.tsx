import { useState } from "react";
import { BiTrash } from "react-icons/bi";

interface TimeEntry {
  date: string;
  time: string;
}

const PatientPresent = () => {
  const [time, setTime] = useState<TimeEntry[]>([]);

  return (
    <>
      {time.map((entry, index) => (
        <div
          key={index}
          className="bg-blue-300 flex justify-between h-10 p-1 rounded-lg px-2 py-5"
        >
          <div className="flex items-center gap-1">
            <h1 className="text-white">Data:</h1>
            <span className="text-white font-bold">{entry.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-white">Horario:</h1>
            <span className="text-white font-bold">{entry.time}</span>
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
