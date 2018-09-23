import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            correo: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.correo.length > 0 && this.state.password.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const body = JSON.stringify({
          correo: this.state.correo,
          password: this.state.password        
        });
        console.log(body);

        fetch('/users/login/', {
              method: 'POST',
              body: body,
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(response => {
              console.log(response);
              response.json().then(json => {
                console.log(json);
                if(json.length > 0)
                {
                    console.log(json[0]._id);
                    this.props.onLogin(this.state.correo, json[0]._id);                    
                }
                else{
                    this.props.onLogin(null,null);
                     alert('Error en usuario o password');         
                }
                
             });
        
          });
       
    }

    render() {
        return (            
            <div className="container-fluid banner">
                <div className="row justify-content-around banner-content center-items">
                    <form onSubmit={this.handleSubmit} className="col-6 center-items">
                        <FormGroup controlId="correo" bsSize="large">
                            <ControlLabel className="auth-text">Correo</ControlLabel>
                            <FormControl
                                type="email"
                                autoFocus
                                componentClass="input"                               
                                value={this.state.correo}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel className="auth-text">Password</ControlLabel>
                            <FormControl
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}                                
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                </div>               
            </div>
        );
    }
}