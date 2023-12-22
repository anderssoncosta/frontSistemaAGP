/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumn } from "react-data-table-component";
import Table from "../../components/table";
import { ApiResponse } from "../../services/patientes";
import { RiEditFill } from "react-icons/ri";
import { BiSolidTrash, BiBookOpen } from "react-icons/bi";
import { Link } from "react-router-dom";

const PatientTable = ({ data = [] }: ApiResponse) => {
  const columns: TableColumn<any>[] = [
    {
      name: "Ações",
      cell: (item) => (
        <div className="flex items-center gap-3 ">
          <Link
            to={`/paciente/${item.id}`}
            title="Abrir Cadastro"
            className="bg-violet-500 text-white py-1 px-2 rounded-lg"
          >
            <BiBookOpen />
          </Link>
          <Link
            to={""}
            title="Editar"
            className="bg-violet-500 text-white py-1 px-2 rounded-lg"
          >
            <RiEditFill />
          </Link>
          <Link
            to={""}
            title="Excluir"
            className="bg-violet-500 text-white py-1 px-2 rounded-lg"
          >
            <BiSolidTrash />
          </Link>
        </div>
      ),
    },
    {
      name: "ID",
      selector: ({ id }) => `${id}`,
      sortable: true,
    },
    {
      name: "Nome Paciente",
      selector: ({ nome_paciente }) => `${nome_paciente}`,
      sortable: true,
    },
    {
      name: "Data de Cadastro",
      selector: ({ updatedAt }) =>
        `${new Date(updatedAt).toLocaleDateString("pt-BR")}`,
      sortable: true,
    },
  ];
  return <Table columns={columns} data={data} />;
};
export default PatientTable;
