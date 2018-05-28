import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import FadeIn from '../../components/animations/fade-in/FadeIn'
import './Login.css'
import brainBitLogo from '../../static/brain_bit_logo.png'

// import {app, facebookProvider} from "../../base";


class Login extends Component {
    constructor(props) {
        super(props);
        // this.authWithFacebook = this.authWithFacebook.bind(this);
        // this.authWithEmailPassword = this.authWithEmailPassword.bind(this);

        this.state = {
            login: '',
            redirect: false
        };
    }

    // authWithFacebook() {
    //     console.log("authenticated with facebook");
    //
    //     app.auth().signInWithPopup(facebookProvider)
    //         .then((user, error) => {
    //             if (error) {
    //                 // this.toaster.show({intent: Intent.DANGER, message: "Unable to sign in with Facebook"})
    //             } else {
    //                 this.props.setCurrentUser(user);
    //                 this.setState({redirect: true})
    //             }
    //         });
    // }
    //
    // authWithEmailPassword(event) {
    //     event.preventDefault();
    //     console.table([{
    //         email: this.emailInput.value,
    //         password: this.passwordInput.value
    //     }]);
    //
    //     const email = this.emailInput.value;
    //     const password = this.passwordInput.value;
    //
    //     app.auth().fetchProvidersForEmail(email)
    //         .then((providers) => {
    //             if (providers.length === 0) {
    //                 // create user
    //                 return app.auth().createUserWithEmailAndPassword(email, password);
    //             } else if (providers.indexOf("password") === -1) {
    //                 // previously used facebook
    //                 this.loginForm.reset();
    //                 // this.toaster.show({intent: Intent.WARNING, message: "Try alternative login"})
    //             } else {
    //                 // sign in
    //                 return app.auth().signInWithEmailAndPassword(email, password);
    //             }
    //         })
    //         .then((user) => {
    //             if (user && user.email) {
    //                 this.loginForm.reset();
    //                 this.props.setCurrentUser(user);
    //                 this.setState({redirect: true})
    //             }
    //         })
    //         .catch((error) => {
    //             // this.toaster.show({intent: Intent.DANGER, message: error.message})
    //         })
    // }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};

        if (this.state.redirect === true) {
            return <Redirect to={from}/>
        }

        /*
        const originalLogin = (
            <div>
                <button style={{width: "100%"}} className="pt-button pt-intent-primary"
                        onClick={() => {
                            this.authWithFacebook()
                        }}>Log In with Facebook
                </button>
                <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
                <form onSubmit={(event) => {
                    this.authWithEmailPassword(event)
                }}
                      ref={(form) => {
                          this.loginForm = form
                      }}>
                    <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
                        <h5>Note</h5>
                        If you don't have an account already, this form will create your account.
                    </div>
                    <label className="pt-label">
                        Email
                        <input style={{width: "100%"}} className="pt-input" name="email" type="email"
                               ref={(input) => {
                                   this.emailInput = input
                               }} placeholder="Email"/>
                    </label>
                    <label className="pt-label">
                        Password
                        <input style={{width: "100%"}} className="pt-input" name="password" type="password"
                               ref={(input) => {
                                   this.passwordInput = input
                               }} placeholder="Password"/>
                    </label>
                    <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary"
                           value="Log In"/>
                </form>
            </div>
        );
        */

        return <FadeIn component={() => <LoginForm login={this.state.login}/>}/>;

    }
}

class IconAdder extends React.Component {
    render() {
        const {tag, onClick, children, ...rest} = this.props;
        const Tag = tag;

        return (
            <Tag onClick={onClick} {...rest}>
                {" "}
                {children}
            </Tag>
        );
    }
}

class LoginForm extends React.Component {
    render = () => {
        const {login} = this.props;
        return <div id="formContent">
            <div className="fadeIn first">
                <img src={brainBitLogo} id="icon" alt="brand icon"/>
            </div>
            <form>
                <input type="text" id="login" value={this.props.login} className="rounded fadeIn second" name="login"
                       placeholder="login"/>
                <input type="text" id="password" className="rounded fadeIn third" name="login"
                       placeholder="password"/>
                <input type="submit" className="rounded fadeIn fourth" value="Log In"/>
            </form>
            <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
        </div>
    }
}

export default Login;
