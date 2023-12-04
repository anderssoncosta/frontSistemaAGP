import Contents from "../../components/Contents";
import HeaderTitle from "../../components/HeaderTitle";
import UserProfile from "../../components/UserProfile";

export default function Financial() {
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
}
