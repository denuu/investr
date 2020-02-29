/**
 * This is a decorator used by any route that needs to be behind
 * authentication. It uses Render Props style for the route.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();

    return (
        // Use hook to pull AuthContext value in Route render prop
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
                )
            }
        />
    );
}

export default PrivateRoute;