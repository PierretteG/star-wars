import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetCardList = ({ planets }) => {
    return (
        <div>
            { planets.map((planet,i) => {
                return (
                    <PlanetCard key={planets[i].url}
                                name={planets[i].name}
                                climate={planets[i].climate}
                                terrain={planets[i].terrain}
                                population={planets[i].population} 
                                />
                );
            })}
        </div>
    )
}

export default PlanetCardList;