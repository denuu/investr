import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './context/auth';

function App(props) {
    const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') || '');

    const setTokens = (data) => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    }
    return (
        // if Provider value set to false, useAuth always false
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin Page</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    {/* Admin uses PrivateRoute to require authentication */}
                    <PrivateRoute exact path="/admin" component={Admin} />
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
