import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";

const Layout = () => {
  return (
    <div className="w-full flex max-h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
};
export default Layout;
