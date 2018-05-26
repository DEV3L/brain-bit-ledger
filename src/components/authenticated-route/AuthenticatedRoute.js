import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';

const AuthenticatedRoute = ({component: Component, authenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} {...rest} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}/>
    )
};

export default AuthenticatedRoute