import React from "react";

import {Col} from 'reactstrap'

import BrandLogo from '../../../components/widgets/brand-logo/BrandLogo'
import Input from '../../../components/widgets/input/Input'

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
            <BrandLogo className='my-4 fadeIn first'/>
            <Col md={11} className="container-fluid">
                <Input id="login"
                       type="text"
                       value={this.props.login}
                       className="mb-3 px-2 py-3 rounded border-0 fadeIn second"
                       placeholder="login"
                       onChange={(login) => {
                           this.setState({login})
                       }}
                />
                <Input id="password"
                       type="password"
                       value={this.props.password}
                       className="mb-3 px-2 py-3 rounded border-0 fadeIn third"
                       placeholder="password"
                       onChange={(password) => {
                           this.setState({password})
                       }}
                />
                <input type="submit" className="rounded fadeIn fourth" value="Log In"/>
            </Col>
            <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
        </div>
    }
}

export default LoginForm