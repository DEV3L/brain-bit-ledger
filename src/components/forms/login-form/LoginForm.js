import React from "react";

import Input from '../../../components/widgets/input/Input'

import brainBitLogo from '../../../static/brain_bit_logo.png'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    render = () => {
        const {login} = this.props;
        return <div id="formContent">
            <div className="my-2 fadeIn first">
                <img src={brainBitLogo} id="icon" alt="brand icon"/>
            </div>
            <form>
                <Input type="text" id="login" value={this.props.login} className="rounded fadeIn second" name="login"
                       placeholder="login"
                       onChange={(login) => {
                           this.setState({login})
                       }}
                />
                <Input type="text" id="password" value={this.props.password} className="rounded fadeIn third"
                       name="password"
                       placeholder="password"
                       onChange={(password) => {
                           this.setState({password})
                       }}
                />
                <input type="submit" className="rounded fadeIn fourth" value="Log In"/>
            </form>
            <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
        </div>
    }
}

export default LoginForm