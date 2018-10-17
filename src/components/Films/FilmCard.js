import React from 'react';

const FilmCard = ({ title, episode, producer, release_date}) => {
    return (
        <div className='tc dib ma2 pa3 br3 mv3 ba bw2 grow b--dark-gray bg-washed-green'>
            <h2>{title}</h2>
            <p>episode: {episode}</p>
            <p>producer: {producer}</p>
            <p>release date: {release_date}</p>
        </div>
    )
}
    


export default FilmCard;