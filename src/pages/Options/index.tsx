import Contents from "../../components/contents";
import HeaderTitle from "../../components/headerTitle";
import UserProfile from "../../components/userProfile";

const Options = () => {
  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Opções" />
      </div>
      <div></div>
    </Contents>
  );
};
export default Options;
