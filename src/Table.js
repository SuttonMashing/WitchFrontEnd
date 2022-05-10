import { useState } from "react";
import mockdata from "./data.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Initiative_Table = () => {
 const [tableData, setTableData] = useState(mockdata);

 const columns = [
     { label: "Initiative", accessor: "initiative", sortable: true },
     { label: "Name", accessor: "name", sortable: true },
     { label: "Health", accessor: "health", sortable: true },
     { label: "Condition", accessor: "condition", sortable: false },
 ];

 const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
     const sorted = [...tableData].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
       a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
        numeric: true,
       }) * (sortOrder === "asc" ? 1 : -1)
      );
     });
     setTableData(sorted);
    }
   };

 return (
  <>
   <table className="table">
    <TableHead columns={columns} handleSorting={handleSorting}/>
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default Initiative_Table;