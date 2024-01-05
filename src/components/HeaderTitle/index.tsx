import { ReactElement } from "react";
import { Link } from "react-router-dom";

export interface HeaderTitleProps {
  title: string;
  iconTitle?: ReactElement;
  route?: string;
}

const HeaderTitle = ({ title, iconTitle, route }: HeaderTitleProps) => {
  return (
    <header className="flex items-center rounded-lg w-full h-20 bg-gradient-to-t from-blue-700 to-blue-400">
      <div className="flex items-center ml-4 max-w-full gap-3">
      {route ? <Link to={route}>{iconTitle}</Link> : iconTitle}
        <h1 className="text-white text-2xl">{title}</h1>
      </div>
    </header>
  );
};
export default HeaderTitle;
