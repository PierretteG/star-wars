import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipCardList = ({ starships }) => {
    return (
        <div>
            { starships.map((starship,i) => {
                return (
                    <StarshipCard key={starships[i].url}
                                name={starships[i].name}
                                cost_in_credits={starships[i].cost_in_credits}
                                hyperdrive_rating={starships[i].hyperdrive_rating} 
                                starship_class={starships[i].starship_class}/>
                );
            })}
        </div>
    )
}

export default StarshipCardList;