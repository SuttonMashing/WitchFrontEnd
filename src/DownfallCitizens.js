import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const DownfallCitizens = () => {
    const apiUrl = "https://witchlightdb.herokuapp.com"
    const [name, setname] = useState('') 
    const [randint, setrandint] = useState(randomNum(0,8))
    const [randint2, setrandint2] = useState(randomNum(0,8))
    const [honourific, sethonourific] = useState('')

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${apiUrl}/api/v1/downfallcitizens`)
        .then(response_from_api => {
          setrandint(randomNum(0,8))  
          setrandint2(randomNum(0,8))
          console.log(response_from_api)
          setname(response_from_api.data[randint].name)
          sethonourific(response_from_api.data[randint2].honourific)

        })
        .catch(err => {
          console.log(err)
        })
      };  

    return (
        <div className='content-container'>
            
                <div className='centre'>
                <button className='generate-button' onClick={handleSubmit}>Generate Character</button>
                <div className='encounter-container'> {name}, {honourific} </div>
                </div>

            
            
        </div>
    );
};

export default DownfallCitizens;