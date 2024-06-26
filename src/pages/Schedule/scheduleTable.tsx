/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumn } from "react-data-table-component";
import Table from "../../components/table";
import { ApiResponse, deletePatient } from "../../services/patientes";
import { RiEditFill } from "react-icons/ri";
import { BiSolidTrash, BiBookOpen } from "react-icons/bi";
import { Link } from "react-router-dom";

const ScheduleTable = ({ data = [] }: ApiResponse) => {
  const handleDelete = async (item: number) => {
    await deletePatient(item);
  };

  const columns: TableColumn<any>[] = [
    {
      name: "Ações",
      cell: (item) => (
        <div className="flex items-center gap-3 ">
          <Link
            to={`/paciente/${item.id}`}
            title="Abrir Cadastro"
            className="bg-blue-500 text-white py-1 px-2 rounded-lg"
          >
            <BiBookOpen />
          </Link>
          <Link
            to={""}
            title="Editar"
            className="bg-blue-500 text-white py-1 px-2 rounded-lg"
          >
            <RiEditFill />
          </Link>
          <button
            onClick={() => handleDelete(item.id)}
            title="Excluir"
            className="bg-blue-500 text-white py-1 px-2 rounded-lg"
          >
            <BiSolidTrash />
          </button>
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
      selector: ({ nome }) => `${nome}`,
      sortable: true,
    },
    {
      name: "Data",
      selector: ({ updatedAt }) =>
        `${new Date(updatedAt).toLocaleDateString("pt-BR")}`,
      sortable: true,
    },
    {
      name: "Horário",
      selector: ({ nome }) => `${nome}`,
      sortable: true,
    },
  ];
  return <Table columns={columns} data={data} />;
};
export default ScheduleTable;
