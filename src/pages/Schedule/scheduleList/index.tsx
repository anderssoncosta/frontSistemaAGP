import Contents from "../../../components/contents";
import HeaderTitle from "../../../components/headerTitle";
import UserProfile from "../../../components/userProfile";
import ScheduleTable from "../scheduleTable";

const ScheduleList = () => {
  return (
    <Contents>
      <div className="w-[95%]">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle title="Lista de Pacientes Agendados" />
        </div>

        <div className="mt-4">
          <ScheduleTable />
        </div>
      </div>
    </Contents>
  );
};

export default ScheduleList;
