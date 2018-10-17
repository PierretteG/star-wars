import React from 'react';
import SpeciesCard from './SpeciesCard';

const SpeciesCardList = ({ species }) => {
    return (
        <div>
            { species.map((spec,i) => {
                return (
                    <SpeciesCard key={species[i].url}
                                name={species[i].name}
                                classification={species[i].classification}
                                average_height={species[i].average_height}
                                skin_colors={species[i].skin_colors}
                                hair_colors={species[i].hair_colors} 
                                />
                );
            })}
        </div>
    )
}

export default SpeciesCardList;