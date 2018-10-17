import React from 'react';

const PlanetCard = ({ name, climate, terrain, population }) => {
    return (
        <div className='tc dib ma2 pa3 br3 mv3 ba bw2 grow b--dark-gray bg-washed-green'>
            <h2>{name}</h2>
            <p>climate: {climate}</p>
            <p>terrain: {terrain}</p>
            <p>population: {population}</p>
        </div>
    )
}
    


export default PlanetCard;