/**
 * This is a decorator used by any route that needs to be behind
 * authentication. It uses Render Props style for the route.
 */

import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {

    return(
        <Route {...rest} render={(props) => (
            <Component {...props} />
        )}
    );
}

export default PrivateRoute;