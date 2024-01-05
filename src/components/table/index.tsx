/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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
    <div className="flex gap-2 bg-blue-500 mt-2 rounded-lg text-white justify-end p-2">
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
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);


  const handleSearch = (text: string) => {
    setSearchText(text);
    setCurrentPage(1)
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchText.toLowerCase())
    )
  );
  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-4 gap-2 w-full">
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="p-2 border rounded-lg w-full hover:border-blue-700 hover:border focus:outline-none"
        />
        <button
          onClick={() => ({})}
          className="bg-white h-10 border text-blue-600 border-blue-600 rounded-lg px-5 hover:bg-blue-700 hover:text-white"
        >
          Buscar
        </button>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        paginationTotalRows={filteredData.length}
        paginationDefaultPage={currentPage}
        paginationComponentOptions={paginationComponentOptions}
        paginationComponent={CustomPagination}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
export default Table;
