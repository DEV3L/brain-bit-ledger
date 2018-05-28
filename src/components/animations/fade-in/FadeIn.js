import React, {Component} from 'react';

class FadeIn extends React.Component {
    render() {
        const {component: Component, children, ...rest} = this.props;

        return (
            <div className="container-fluid height-full wrapper fadeInDown">
                <Component {...rest}>{children}</Component>
            </div>
        );
    }
}

export default FadeIn

