import React from 'react';
import VehicleCard from './VehicleCard';

const VehicleCardList = ({ vehicles }) => {
    return (
        <div>
            { vehicles.map((vehicle,i) => {
                return (
                    <VehicleCard key={vehicles[i].url}
                                name={vehicles[i].name}
                                cost_in_credits={vehicles[i].cost_in_credits}
                                max_atmosphering_speed={vehicles[i].max_atmosphering_speed} />
                );
            })}
        </div>
    )
}

export default VehicleCardList;