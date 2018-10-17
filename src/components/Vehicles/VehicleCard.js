import React from 'react';

const VehicleCard = ({ name, model, cost_in_credits, max_atmosphering_speed }) => {
    return (
        <div className='tc dib ma2 pa3 br3 mv3 ba bw2 grow b--dark-gray bg-washed-green'>
            <h2>{name}</h2>
            <p>model: {model}</p>
            <p>cost in credits: {cost_in_credits}</p>
            <p>max atmosphering speed: {max_atmosphering_speed}</p>
        </div>
    )
}
    


export default VehicleCard;