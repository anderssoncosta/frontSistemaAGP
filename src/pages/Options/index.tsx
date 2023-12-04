import Contents from "../../components/Contents";
import HeaderTitle from "../../components/HeaderTitle";
import UserProfile from "../../components/UserProfile";

export default function Options() {
  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Opções" />
      </div>
      <div>
        <NavMenu/>
      </div>
    </Contents>
  );
}
