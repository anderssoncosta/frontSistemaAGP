import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar";
import Container from "../Container";

export default function Layout() {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
}
