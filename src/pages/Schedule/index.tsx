import Contents from "../../components/Contents";
import HeaderTitle from "../../components/HeaderTitle";
import UserProfile from "../../components/UserProfile";

export default function Shedule() {
  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Agenda" />
      </div>
    </Contents>
  );
}
