import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            password: "",
            correo: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.correo.length > 0 && this.state.password.length > 0 && this.state.nombre.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(e){
      e.preventDefault();
      const body = JSON.stringify({
        nombre: this.state.nombre,
        correo: this.state.correo,
        password: this.state.password        
      });
      console.log(body);

      fetch('/users/', {
            method: 'POST',
            body: body,
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => {
            console.log(response);
            response.json().then(json => {
              console.log(json);
              if(json.exists === "true")
              {
                 alert('Ya existe un usuario con ese correo. Trate de nuevo');
              }

              this.props.onSubmit();
              
           });
      
        });
     
    }

    render() {
        return (
            <div className="container-fluid banner">
                <div className="row justify-content-around banner-content center-items">
                    <form onSubmit={this.handleSubmit} className="col-6 center-items">
                        <FormGroup controlId="nombre" bsSize="large">
                            <ControlLabel className="auth-text">Name</ControlLabel>
                            <FormControl
                                type="text"
                                autoFocus                                
                                value={this.state.nombre}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="correo" bsSize="large">
                            <ControlLabel className="auth-text">Correo</ControlLabel>
                            <FormControl
                                type="email"
                                autoFocus                                
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
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}