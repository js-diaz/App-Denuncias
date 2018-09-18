import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import request from "superagent";


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
        request
          .post("users/login/")
          .set("Content-Type", "application/json")
          .send(body)
          .end((err, res)=>{
            console.log(res.body);
            if(res.body.length > 0)
            {
                console.log(res.body[0]._id);
                this.props.onLogin(this.state.correo, res.body[0]._id);                
                           
            }
            else{
                this.props.onLogin(null,null);
                 alert('Error en usuario o password');           
               
            }
            
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
                                autoFocus
                                type="correo"
                                value={this.state.correo}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel className="auth-text">Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
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