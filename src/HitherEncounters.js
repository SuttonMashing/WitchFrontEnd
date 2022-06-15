import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import gastable from "./marshgas.json";
import streamtable from "./streamofvisions.json";

const HitherEncounters = () => {
    const apiUrl = "https://witchlightdb.herokuapp.com"
    const [encounter, setencounter] = useState('') 
    const [randint, setrandint] = useState(randomNum(0,8))
    const [row, setrow] = useState('')
    const [hassubtable, sethassubtable] = useState(false)
    const [subroll, setsubroll] = useState(randomNum(0,8))
    const [subresult, setsubresult] = useState('')
    const [gasdescription, setgasdescription] = useState('')

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${apiUrl}/api/v1/hitherencounters`)
        .then(response_from_api => {  
          console.log(response_from_api)
          setrow(response_from_api.data[randint])
          setencounter(row.encounter)
        })
        .catch(err => {
          console.log(err)
        })
      };  

    const subtableRoll = (event) => {
      event.preventDefault();
      setsubroll(randomNum(1,9));
      if (encounter === "Marsh Gas"){
        if (subroll > 0 && subroll < 4) {
          setsubresult(gastable[0].type)
          setgasdescription(gastable[0].description)
        }
        else if (subroll > 3 && subroll<6) {
          setsubresult(gastable[1].type)
          setgasdescription(gastable[1].description)
        }
        else if (subroll >5 && subroll < 8) {
          setsubresult(gastable[2].type)
          setgasdescription(gastable[2].description)
        }
        else if (subroll === 8) {
          setsubresult(gastable[3].type)
          setgasdescription(gastable[3].description)
        }

      }
      else if (encounter === "Stream of Visions") {
        setsubresult(streamtable[subroll-1].scene)
      }

    }

    const checkSubtable = (event) => {
      event.preventDefault();
      if (row.subtable === true){
        sethassubtable (true)
      }
      else { 
        sethassubtable(false);
      }
    }

    const buttonClick = (event) => {
      event.preventDefault();
      setrandint(randomNum(0,8));
      checkSubtable(event);
      handleSubmit(event);
      setgasdescription('');
      setsubresult('');


    }

    return (
        <div className='content-container'>
            
                <div className='centre'>
                <button className='generate-button' onClick={buttonClick}>Generate Encounter</button>
                <div className='encounter-container'> {encounter} </div>
                <div>{hassubtable ?<button onClick={subtableRoll}>Roll Subtable</button>:null}</div>
                <div>{subresult}</div>
                <div>{gasdescription}</div>
                  
                </div>

            
            
        </div>
    );
};

export default HitherEncounters;