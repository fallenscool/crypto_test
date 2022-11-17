import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import "./styles.css";

const Table = ({ columns, data, setData }) => {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [draggable, setDraggable] = useState("");
  const [dragTarget, setDragTarget] = useState("");

  useEffect(() => {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;

    setRows(data.slice(startIndex, endIndex));
  }, [data, currentPage]);

  const dragOver = (event) => {
    event.preventDefault();
  };

  const dragStart = (id) => {
    setDraggable(id);
  };

  const dragEnd = () => {
    setDraggable("");
  };

  const drop = () => {
    const updatedData = [...data];
    const x = data.findIndex((row) => row.id === draggable);
    const y = data.findIndex((row) => row.id === dragTarget);

    updatedData[x] = updatedData.splice(y, 1, updatedData[x])[0];
    setData(updatedData);
    setDragTarget("");
  };

  const dragEnter = (id) => {
    setDragTarget(id);
  };

  return (
    <div className="table__wrap">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              draggable={true}
              onDragOver={dragOver}
              onDragStart={() => dragStart(row.id)}
              onDragEnd={() => dragEnd()}
              onDragEnter={() => dragEnter(row.id)}
              onDrop={() => drop()}
              className={`${dragTarget === row.id ? "target" : ""}`}
            >
              <th>{row.id}</th>
              <th>{row.symbol}</th>
              <th>{row.name}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={currentPage}
        count={data.length}
        itemsPerPage={20}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Table;
