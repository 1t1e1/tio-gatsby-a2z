import React from 'react';
import { Link } from "gatsby"

const Menu = () => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    return (
        <div className='flex flex-col p-10 text-blue '>
            {alphabet.map((letter) => ( 
                <Link to={letter}>{letter}</Link>
            ))}
        </div>
    );
};

export default Menu;