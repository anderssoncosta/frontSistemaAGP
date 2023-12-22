/* eslint-disable @typescript-eslint/no-explicit-any */
import DataTable, { TableColumn } from "react-data-table-component";

interface TableProps {
  data: any[];
  columns: TableColumn<any>[];
}

const paginationComponentOptions = {
  rowsPerPageText: "Registros por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const CustomPagination = ({
  rowsPerPage,
  rowCount,
  currentPage,
  setPage,
}: any) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="flex gap-2 bg-violet-500 mt-2 rounded-lg text-white justify-end p-2">
      <span>
        Página {currentPage} de {totalPages} | 
      </span>
      <button
        className="hover:underline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Anterior
      </button>
      <button
        className="hover:underline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        Próxima
      </button>
    </div>
  );
};

const Table = ({ data, columns }: TableProps) => {
  return (
    <div className="rounded-lg">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={10}
        paginationComponentOptions={paginationComponentOptions}
        paginationComponent={CustomPagination}
      />
    </div>
  );
};
export default Table;
