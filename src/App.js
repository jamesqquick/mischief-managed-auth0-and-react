import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from './react-auth0-spa';

function App() {
    const { loading, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div className="App">
            <h1>Mischief Managed....Not Yet!</h1>
            {isAuthenticated ? (
                <>
                    <button onClick={logout}>Mischief Managed</button>
                    <Link to="/mischief">Search For Mischief!</Link>
                </>
            ) : (
                <button onClick={loginWithRedirect}>
                    I Solemly Swear I am Up To No Good
                </button>
            )}
        </div>
    );
}

export default App;
