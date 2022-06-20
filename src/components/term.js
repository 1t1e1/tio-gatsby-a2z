import React from 'react';
import { Link } from 'gatsby';

const Term =  ( { term, index } )  => {
    return (
        <div className='py-10 max-w-2xl'  key={index} >
            <Link to={"/"+term.slug}>
                <h3 className="pb-5 text-3xl text-blue font-bold">
                    {term.title}
                </h3>
            </Link>
            <p>{term.description}</p>
        </div>
    );
}

export default Term