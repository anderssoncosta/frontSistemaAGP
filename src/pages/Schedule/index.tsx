import { useState } from "react";
import AppointmentScheduler from "../../components/appointmentScheduler";
import Contents from "../../components/contents";
import HeaderTitle from "../../components/headerTitle";
import UserProfile from "../../components/userProfile";
import { format } from "date-fns";

const Shedule = () => {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [day, setDay] = useState<string>();

  const handleSchedule = (dateTime: Date) => {
    const Date = format(dateTime, "dd/MM/yyyy");
    const Time = format(dateTime, "HH:mm");
    const Day = format(dateTime, "eeee");

    console.log(`Agendado para ${Date} às ${Time} - ${Day}`);
    setDate(Date);
    setTime(Time);
    setDay(Day);
  };

  return (
    <Contents>
      <div className="w-[95%]">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle title="Agendar Consulta" />
        </div>
        <AppointmentScheduler onSchedule={handleSchedule} />
        <div>{`Agendado para ${date} às ${time} - ${day}`}</div>
      </div>
    </Contents>
  );
};
export default Shedule;
