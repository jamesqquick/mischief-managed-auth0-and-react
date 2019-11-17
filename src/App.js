import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <h1>Mischief Managed</h1>
            <h2 className="fade-in">...OR IS IT?!?!?!</h2>
            <button className="btn">Mischief Managed</button>
            <button className="btn">I Solemly Swear I am Up To No Good</button>
            <Link to="/mischief">Search For Mischief!</Link>
        </div>
    );
}

export default App;
