import { useState, useEffect } from "react";
import mockdata from "./data.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import axios from "axios";


const Initiative_Table = () => {
 const [tableData, setTableData] = useState(mockdata);
 const apiUrl = "https://witchlightdb.herokuapp.com"

 const columns = [
     { label: "Initiative", accessor: "initiative", sortable: true },
     { label: "Name", accessor: "name", sortable: true },
     { label: "Health", accessor: "health", sortable: true },
     { label: "Condition", accessor: "condition", sortable: false },
 ];

 const updateinitiativeDB = (value, accessor, tData) => {
    if (accessor === "name") {

    axios.put(`${apiUrl}/api/v1/initiatives/${tData.id}`, {name: value, health: tData.health, initiative: tData.initiative, condition: tData.condition}  )
    .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
    }
    if (accessor === "health") {

        axios.put(`${apiUrl}/api/v1/initiatives/${tData.id}`, {health: value, name: tData.name, initiative: tData.initiative, condition: tData.condition}  )
        .then((response) => {
            console.log(response.data);
          }, (error) => {
            console.log(error);
          });
        }

    if (accessor === "condition") {

        axios.put(`${apiUrl}/api/v1/initiatives/${tData.id}`, {condition: value, health: tData.health, initiative: tData.initiative, name: tData.name}  )
        .then((response) => {
            console.log(response.data);
            }, (error) => {
            console.log(error);
            });
        }
        
    if (accessor === "initiative") {

        axios.put(`${apiUrl}/api/v1/initiatives/${tData.id}`, {initiative: value, health: tData.health, name: tData.name, condition: tData.condition}  )
        .then((response) => {
            console.log(response.data);
            }, (error) => {
            console.log(error);
            });
        }


};
    

 const fetchInitiative= () => {
    axios.get(`${apiUrl}/api/v1/initiatives`)
    .then(response_from_api => {
        console.log(response_from_api)
        setTableData(response_from_api.data)
    })
    .catch(err => {
      console.log(err)
    })
  };  


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
   
   const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null
});


useEffect(() => {
    fetchInitiative();
}, []);



 return (
  <>
   <table className="table">
    <TableHead columns={columns} handleSorting={handleSorting}/>
    <TableBody columns={columns} tableData={tableData} updateinitiativeDB={updateinitiativeDB}/>
   </table>
  </>
 );
};


export default Initiative_Table;