import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
        <input
        className='pa3 mb5 ba br2 b--green bg-washed-green'
        type='search' 
        placeholder='search'
        onChange={searchChange} />
        </div>
    )
}

export default SearchBox;