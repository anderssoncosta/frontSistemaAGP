import React, { useState } from "react";

// interface AppointmentSchedulerProps {
//   onSchedule: (dateTime: Date) => void;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppointmentScheduler = ({ onSchedule }: any) => {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  // const handleSchedule = () => {
  //   const selectedDateTime = new Date(selectedDate);
  //   onSchedule(selectedDateTime);
  // };

  return (
    <div className="flex flex-col mx-3 my-3">
      <div className="flex items-center my-4">
        <label htmlFor="appointmentDate" className="mr-2">
          Escolha a data e hora:
        </label>
        <input
          type="datetime-local"
          id="appointmentDate"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border border-blue-400 rounded-md text-blue-500"
        />
      </div>
      <button
        onClick={onSchedule}
        className="bg-blue-500 text-white p-2 rounded-md "
      >
        Agendar
      </button>
    </div>
  );
};

export default AppointmentScheduler;
