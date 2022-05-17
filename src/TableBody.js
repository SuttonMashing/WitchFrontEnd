import axios from "axios";

 const TableBody = ({ tableData, columns, updateinitiativeDB, fetchInitiative }) => {
   const apiUrl = "https://witchlightdb.herokuapp.com"

   const handleChange = (accessor, tData) => (e) => {
      
      const value = e.target.textContent;
      const header = accessor;
      console.log(tData.id)
      console.log(value)
      console.log(header)
      updateinitiativeDB(value, accessor, tData)      
   }

   const clearInitiative = (e, data) => {
      e.preventDefault();
      axios.delete(`${apiUrl}/api/v1/initiatives/${data}`)
      .then((response) => {
         console.log(response.data);
         fetchInitiative();
         }, (error) => {
         console.log(error);
         });
      
   }

    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.id}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "——";
          return <td onBlur={handleChange(accessor, data)} contentEditable='true' key={accessor}>{tData}</td>

         })}
         <button onClick={(e)=> clearInitiative(e, data.id)}>Delete</button>
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;