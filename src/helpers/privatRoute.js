import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        (props) => (
            localStorage.authToken ?
                <Component {...props} /> :
                <Redirect to={{ pathname: "/main", state: { from: props.location } }} />
        )
    } />
)

export default PrivateRoute