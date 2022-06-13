import React from 'react';

const Term =  ( { term, index } )  => {
    return (
        <div className='py-10 max-w-2xl'  key={index} >
            <h3 className='pb-5 text-3xl text-blue font-bold'>{term.title}</h3>
            <p>{term.description}</p>
        </div>
    );
}

export default Term