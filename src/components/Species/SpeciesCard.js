import React from 'react';

const SpeciesCard = ({ name, classification, average_height, skin_colors, hair_colors }) => {
    return (
        <div className='tc dib ma2 pa3 br3 mv3 ba bw2 grow b--dark-gray bg-washed-green'>
            <h2>{name}</h2>
            <p>classification: {classification}</p>
            <p>average height: {average_height}</p>
            <p>skin colors: {skin_colors}</p>
            <p>hair colors: {hair_colors}</p>
        </div>
    )
}
    


export default SpeciesCard;