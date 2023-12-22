import { ReactNode } from "react";

interface ContentsProps {
  children: ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return <div className="w-full p-2">{children}</div>;
};
export default Contents;
