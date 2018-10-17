import React from 'react';
import FilmCard from './FilmCard';

const FilmCardList = ({ films }) => {
    return (
        <div>
            { films.map((film,i) => {
                return (
                    <FilmCard key={films[i].url}
                                title={films[i].title}
                                episode={films[i].episode_id}
                                producer={films[i].producer} 
                                release_date={films[i].release_date} />
                );
            })}
        </div>
    )
}

export default FilmCardList;