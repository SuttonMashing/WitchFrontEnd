import { useState } from "react";
import axios from "axios";

const NewTableRow = ({fetchInitiative}) => {
    const [inputValue, setinputValue] = useState()
    const [name, setName] = useState()
    const [initiative, setInitiative] = useState()
    const [health, setHealth] = useState()
    const apiUrl = "https://witchlightdb.herokuapp.com"
    


    const pushtoDB = (name, initiative, health) => (e) => {
        e.preventDefault();
        console.log(name)
        console.log(initiative)
        console.log(health)
        axios.post(`${apiUrl}/api/v1/initiatives/`, {name: name, health: health, initiative: initiative, condition: 'none'})
        .then((response) => {
            console.log(response.data);
            fetchInitiative();
            setinputValue("");
            

          }, (error) => {
            console.log(error);
          });
    }
    
    
    return (
        <div>
           Name <input type="text" value = {inputValue} onChange={e => setName(e.target.value)}/>
           Initiative <input type="number" value = {inputValue} onChange={e => setInitiative(e.target.value)}/>
           Health <input type="number" value = {inputValue} onChange={e => setHealth(e.target.value)}/>
           <button onClick={pushtoDB(name, initiative, health)}>Submit</button>
        </div>
    );
};

export default NewTableRow;