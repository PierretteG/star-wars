import React from 'react';

const StarshipCard = ({ name, cost_in_credits, hyperdrive_rating, starship_class }) => {
    return (
        <div className='tc dib ma2 pa3 br3 mv3 ba bw2 grow b--dark-gray bg-washed-green'>
            <h2>{name}</h2>
            <p>cost in credits: {cost_in_credits}</p>
            <p>hyperdrive rating: {hyperdrive_rating}</p>
            <p>starship class: {starship_class}</p>
        </div>
    )
}
    


export default StarshipCard;
