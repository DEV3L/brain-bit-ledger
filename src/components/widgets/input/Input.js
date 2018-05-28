import React, {Component} from "react";
import {Input as BootstrapInput} from "reactstrap";

import "./Input.css";

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || ""
        }
    }

    render() {
        //<input type="text" id="login" value={this.props.login} className="rounded fadeIn second" name="login"
        //       placeholder="login"/>
        const {value: propsValue, onChange, ...rest} = this.props;
        const {value} = this.state;

        return (
            <BootstrapInput onChange={this.onChange} value={value} {...rest} />
        )

        /*
        const fieldId = this.props.id ? this.props.id : this.props.name;

        return (
            <FormGroup className="m-2">
                {this.props.label &&
                <Label className="font-weight-bold mb-0" for={fieldId}>{this.props.label}</Label>
                }
                <BootstrapInput
                    {...this.props}
                    value={this.props.value}
                    onChange={(e) => {
                        const value = e.target.value;
                        this.setState({value});
                        this.props.onChange(value);
                    }}
                    type={this.props.type}
                    name={fieldId}
                    id={fieldId}
                    placeholder={this.props.placeholder}
                />
                {this.props.rlabel &&
                <Label className="font-weight-bold mb-0" for={fieldId}>{this.props.rlabel}</Label>
                }
            </FormGroup>
        );
        */
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.onChange(value);
    }
}

export default Input;
