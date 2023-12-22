import Contents from "../../components/contents";
import HeaderTitle from "../../components/headerTitle";
import UserProfile from "../../components/userProfile";

const Financial = () => {
  return (
    <Contents>
      <div className="w-full">
        <UserProfile />
        <HeaderTitle title="Finanças" />
      </div>
      <div className="h-[calc(100%-160px)] flex flex-1 flex-col w-full overflow-y-scroll">
        conteudo
      </div>
    </Contents>
  );
};
export default Financial;
