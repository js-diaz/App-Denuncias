import React, {Component} from "react";
import Navbar from "./Navbar.js";
import NavbarUsers from "./NavbarUsers.js";
import Copyright from "./Copyright.js";
import Login from "./Login.js";
import MiCuenta from "./MiCuenta.js";
import Denuncia from "./Denuncia.js";
import SignUp from "./SignUp.js";
import Denuncias from "./Denuncias.js";
import Contact from "./Contact.js";
import Home from "./Home.js";

class App extends Component {


 constructor(props) {
    super(props);

    this.state = {
      navbar: 'Principal',
      ubicacion: 'Home',
      correo: null,
      id:null
    };

    this.dondeEsta = this.dondeEsta.bind(this);
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCrearDenuncia = this.handleCrearDenuncia.bind(this);
}

dondeEsta(tab) {
    this.setState({ubicacion: tab});
}

logOut(){
    this.setState({ubicacion:'Home', navbar:'Principal', correo:null, id:null});
}

login(){
    this.setState({ubicacion: 'Login'});
}

handleLogin(correo, id){
  if(correo)
  {
    this.setState({ubicacion: 'MiCuenta', navbar: 'NavbarUsers', correo:correo, id: id});
  }
  else{
    this.setState({ubicacion: 'Home', navbar: 'Principal', correo:correo, id: id});
  }
}


handleCrearDenuncia(){
  if(this.state.correo)
  {
    this.setState({ubicacion: 'MiCuenta', navbar: 'NavbarUsers'});
  }
  else{
    this.setState({ubicacion: 'Denuncias', navbar: 'Principal'});
  }
}

render() { 
  
    let navbar = <Navbar onChange={this.dondeEsta}/>;
    if (this.state.navbar === 'NavbarUsers'){
      navbar = <NavbarUsers onChange={this.dondeEsta} onLogOut={this.logOut}/>;
    }


    let tab = <Home/>;
    if(this.state.ubicacion === 'Login'){
      tab = <Login onLogin = {this.handleLogin}/>;
    } else if(this.state.ubicacion === 'SignUp'){
      tab = <SignUp onSubmit = {this.login}/>;
    } else if(this.state.ubicacion === 'MiCuenta'){
      tab = <MiCuenta user = {this.state.id}/>;
    } else if(this.state.ubicacion === 'Denuncia') {
      tab = <Denuncia onSubmit = {this.handleCrearDenuncia} user= {this.state.correo} id={this.state.id}/>;
    } 
    else if(this.state.ubicacion === 'Denuncias') {
      tab = <Denuncias/>;
    } 
    else if(this.state.ubicacion === 'Contactenos') {
      tab = <Contact/>;
    } 
  
  return (
    <div>
      <div> {navbar} </div>
      <div> {tab} </div>
      <Copyright/>
    </div>
   );
}
}

export default App;
