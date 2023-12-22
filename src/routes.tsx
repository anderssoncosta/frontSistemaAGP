import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Patients from "./pages/Patients";
import Schedule from "./pages/schedule";
import PatientsInfo from "./pages/Patients/patientsInfo";
import Financial from "./pages/financial";
import Options from "./pages/options";
import Login from "./pages/login";
import Register from "./pages/register";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Patients />} />
        <Route path="/paciente/:id" element={<PatientsInfo />} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="/financeiro" element={<Financial />} />
        <Route path="/opcoes" element={<Options />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
