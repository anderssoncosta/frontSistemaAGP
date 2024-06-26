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
import RegisterPatient from "./pages/Patients/registerPatient";
import SheetType from "./pages/Patients/SheetType";
import ScheduleList from "./pages/schedule/scheduleList";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Patients />} />
        <Route
          path="/pacientes/cadastrar-paciente"
          element={<RegisterPatient />}
        />
        <Route path="/paciente/:id" element={<PatientsInfo />} />
        <Route path="/tipo-de-ficha" element={<SheetType />} />
        <Route path="/agendar" element={<Schedule />} />
        <Route path="/lista-de-agendamentos" element={<ScheduleList />} />
        <Route path="/financeiro" element={<Financial />} />
        <Route path="/opcoes" element={<Options />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}
