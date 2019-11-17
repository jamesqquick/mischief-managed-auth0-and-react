import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from './react-auth0-spa';
function App() {
    const { loading, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Mischief Managed</h1>
            <h2 className="fade-in">...OR IS IT?!?!?!</h2>
            {!isAuthenticated && (
                <button className="btn" onClick={loginWithRedirect}>
                    I Solemly Swear I am Up To No Good
                </button>
            )}
            {isAuthenticated && (
                <>
                    <button className="btn" onClick={logout}>
                        Mischief Managed
                    </button>
                    <Link to="/mischief">Search For Mischief!</Link>
                </>
            )}
        </div>
    );
}

export default App;
