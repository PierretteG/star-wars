import React from 'react';

const PeopleCard = ({ name, height, mass, hairColor, skinColor, eyeColor, gender}) => {
    return (
        <div className='tc dib ma2 pa3 br3 mv3 ba bw2 grow b--dark-gray bg-washed-green'>
            <h2>{name}</h2>
            <p>height: {height}</p>
            <p>mass: {mass}</p>
            <p>hair color: {hairColor}</p>
            <p>skin color: {skinColor}</p>
            <p>eye color: {eyeColor}</p>
            <p>gender: {gender}</p>

        </div>
    )
}
    


export default PeopleCard;
