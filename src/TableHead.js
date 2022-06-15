import { useState } from "react";

const TableHead = ({ columns, handleSorting }) => {

    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("");
    const handleSortingChange = (accessor) => {
    const sortOrder =
        accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
    };

    return (
        <thead>
         <tr>
          {columns.map(({ label, accessor, sortable }) => {
           const cl = sortable
           ? sortField && sortField === accessor && order === "desc"
            ? "down"
            : "default"
           : "";
           return (
            <th
             key={accessor}
             className={cl}
            >
             {label}
             <button onClick={sortable ? () => handleSortingChange(accessor) : null}> sort </button>
            </th>
           );
          })}
         </tr>
        </thead>
       );
    };
export default TableHead;
   