import React from 'react';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Planets from './Planets';

const Display = () => {
    const{category, id} = useParams();
    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(response=>{
                console.log("MAKING AXIOS CALL")
                console.log(response)
                setInfo(response.data)

            })
            .catch(err=>console.log(err))
    },[category,id])
    return (
        
        <div>
            {category=="people"?
                <>
                    
                    <h3>Name: {info.name}</h3>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                </>:
                category=="planets"?
                <Planets name = {info.name} cli = {info.climate} terrain = {info.terrain}></Planets>:
                category=="films"?
                <>
                    
                    <h3>Title: {info.title}</h3>
                    <h3>Director: {info.director}</h3>
                    <h3>Producer: {info.producer}</h3>
                </>:
                <>
                    <h1>huh? who dis</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
                </>
            }

        </div>
    );
};

export default Display;