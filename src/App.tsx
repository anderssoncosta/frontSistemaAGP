import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";
import Financial from "./pages/Financial";
import Options from "./pages/Options";
import Layout from "./components/Layout";
import PatientsInfo from "./pages/Patients/PatientsInfo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pacientes",
        element: <Patients />,
      },
      {
        path: "/pacientes/:id",
        element: <PatientsInfo />,
      },
      {
        path: "/agenda",
        element: <Schedule />,
      },
      {
        path: "/financeiro",
        element: <Financial />,
      },
      {
        path: "/opcoes",
        element: <Options />,
      },
    ],
  },
]);

export { router };
