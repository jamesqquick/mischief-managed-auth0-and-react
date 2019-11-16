import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>Mischief Managed....Not Yet!</h1>
            <button>I Solemly Swear I am Up To No Good</button>
            <button>Mischief Managed</button>
            <Link to="/mischief">Search For Mischief!</Link>
        </div>
    );
}

export default App;
