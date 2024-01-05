import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full h-screen p-5">{children}</div>;
};
export default Container;
