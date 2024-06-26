import { ReactNode } from "react";

interface ContentsProps {
  children: ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return (
    <div className=" flex flex-col items-center w-full h-screen p-2 relative">
      {children}
    </div>
  );
};
export default Contents;
