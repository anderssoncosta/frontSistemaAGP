import { Outlet } from "react-router-dom";
import SideBar from "../sidebar";

const Layout = () => {
  return (
    <div className="w-full flex">
      <div>
        <SideBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
