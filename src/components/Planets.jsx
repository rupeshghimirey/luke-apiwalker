import React from 'react';

const Planets = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Climate: {props.cli}</h3>
            <h3>Terrain: {props.terrain}</h3>
        </div>
    );
};


export default Planets;