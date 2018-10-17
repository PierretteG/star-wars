import React from 'react';
import PersonCard from './PersonCard';

const PersonCardList = ({ people }) => {
    return (
        <div>
            { people.map((person,i) => {
                return (
                    <PersonCard key={people[i].url}
                                name={people[i].name}
                                height={people[i].height}
                                mass={people[i].mass} 
                                hairColor={people[i].hair_color}
                                skinColor={people[i].skin_color}
                                eyeColor={people[i].eye_color}
                                gender={people[i].gender}
                                />
                );
            })}
        </div>
    )
}

export default PersonCardList;