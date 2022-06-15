import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const HitherEncounters = () => {
    const apiUrl = "https://witchlightdb.herokuapp.com"
    const [encounter, setencounter] = useState('') 
    const [randint, setrandint] = useState(randomNum(0,8))
    const [row, setrow] = useState('')
    const [subtableresult, setsubtableresult] = useState(false)

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${apiUrl}/api/v1/hitherencounters`)
        .then(response_from_api => {
          setrandint(randomNum(0,8))  
          console.log(response_from_api)
          setrow(response_from_api.data[randint])
          setencounter(row.encounter)
        })
        .catch(err => {
          console.log(err)
        })
      };  

    const hasSubtable = (event) => {
      event.preventDefault();
      if (row.subtable === true){
        setsubtableresult ('Uh oh stinky')
        return true
      }
    }

    const buttonClick = (event) => {
      event.preventDefault();
      hasSubtable(event);
      handleSubmit(event);
    }

    return (
        <div className='content-container'>
            
                <div className='centre'>
                <button className='generate-button' onClick={buttonClick}>Generate Encounter</button>
                <div className='encounter-container'> {encounter} </div>
                <div>
                <div>{subtableresult}</div>
                </div>
                  
                </div>

            
            
        </div>
    );
};

export default HitherEncounters;