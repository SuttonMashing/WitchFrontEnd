import background from './wbw.jpeg';
import axios from 'axios';
import {useState, useEffect} from 'react';

const StartPage = () => {

    const apiUrl = "https://witchlightdb.herokuapp.com"
    const [encounter, setencounter] = useState('') 
    const [randint, setrandint] = useState('')

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${apiUrl}/api/v1/hitherencounters`)
        .then(response_from_api => {
          setrandint(randomNum(1,7))  
          console.log(response_from_api)
          setencounter(response_from_api.data[randint].encounter)
        })
        .catch(err => {
          console.log(err)
        })
      };  

    return (
        <div className='start'>
            <div>
                
                <button onClick={handleSubmit}>Click me</button>
                <div> {encounter} </div>
            
            
            </div>
        </div>
    );
};

export default StartPage;