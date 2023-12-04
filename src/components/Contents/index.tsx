import { ReactNode } from "react";

interface ContentsProps {
  children: ReactNode;
}

export default function Contents({ children }: ContentsProps) {
  return <div className="w-full p-2 relative">{children}</div>;
}
