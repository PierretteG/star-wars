import React from 'react';

const Menu = ({ onButtonSelect }) => {
    return (
    <div className='mt4'>
    <button onClick={() => onButtonSelect('films')} 
    className="f3 dim ba bw0 ma3 ph3 pv3 bg-washed-green b--dark-gray dib br2 pointer">Films</button>
    <button onClick={() => onButtonSelect('people')} 
    className="f3 dim ba bw0 ma3 ph3 pv3 bg-washed-green b--dark-gray dib br2 pointer">People</button>
    <button onClick={() => onButtonSelect('planets')} 
    className="f3 dim ba bw0 ma3 ph3 pv3 bg-washed-green b--dark-gray dib br2 pointer">Planets</button>
    <button onClick={() => onButtonSelect('species')} 
    className="f3 dim ba bw0 ma3 ph3 pv3 bg-washed-green b--dark-gray dib br2 pointer">Species</button>
    <button onClick={() => onButtonSelect('starships')} 
    className="f3 dim ba bw0 ma3 ph3 pv3 bg-washed-green b--dark-gray dib br2 pointer">Starships</button>
    <button onClick={() => onButtonSelect('vehicles')} 
    className="f3 dim ba bw0 ma3 ph3 pv3 bg-washed-green b--dark-gray dib br2 pointer">Vehicles</button>
    </div>
    )
}

export default Menu;