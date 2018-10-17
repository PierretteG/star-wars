import React from 'react';

const Navigation = () => {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <h1 onClick={() => window.location.reload()} className='f3 link dim pa3 underline h1a3 pointer'>Menu</h1>
            </nav>
        </div>
    )
}

export default Navigation;