import React from 'react';
import face from "../assets/Troll Face.png"

export default function Nav(){

    return (

    <div className="nav">
        <img src={face} className="nav-img" />
        <p className='nav-txt'>Meme Generator</p>
    </div>
    );

}