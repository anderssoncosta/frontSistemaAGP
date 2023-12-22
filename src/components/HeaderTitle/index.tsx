import { ReactElement } from "react";
import { Link } from "react-router-dom";

export interface HeaderTitleProps {
  title: string;
  iconTitle?: ReactElement;
}

const HeaderTitle = ({ title, iconTitle }: HeaderTitleProps) => {
  return (
    <header className="flex items-center rounded-lg w-full h-20 bg-gradient-to-t from-violet-700 to-violet-400">
      <div className="flex items-center ml-4 max-w-full gap-3">
        <Link to="/pacientes">{iconTitle}</Link>
        <h1 className="text-white text-2xl">{title}</h1>
      </div>
    </header>
  );
};
export default HeaderTitle;
