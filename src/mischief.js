import React from 'react';
import marauders from './marauders.jpg';
import { Link } from 'react-router-dom';
export default function mischief() {
    return (
        <div>
            <h1>I want all of the mischief!</h1>
            <Link to="/" className="block">
                Home
            </Link>
            <img src={marauders} alt="Marauders Map" />
        </div>
    );
}
