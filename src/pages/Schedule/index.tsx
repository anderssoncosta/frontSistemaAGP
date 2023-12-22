import Contents from "../../components/contents";
import HeaderTitle from "../../components/headerTitle";
import UserProfile from "../../components/userProfile";

const Shedule = () => {
  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Agenda" />
      </div>
    </Contents>
  );
};
export default Shedule;
