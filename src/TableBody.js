 const TableBody = ({ tableData, columns, updateinitiativeDB }) => {

   const handleChange = (accessor, tData) => (e) => {
      
      const value = e.target.textContent;
      const header = accessor;
      console.log(tData.id)
      console.log(value)
      console.log(header)
      updateinitiativeDB(value, accessor, tData)      
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
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;