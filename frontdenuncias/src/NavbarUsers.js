import React, {Component} from "react";

class NavBar extends Component {

    constructor(props) {
    super(props);
    
    this.state = {
      onChange: props.onChange,
      onLogOut: props.onLogOut
    };

}

    render() {
      return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container-fluid">                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.state.onChange.bind(this, 'Home')} href={'#'}>Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.state.onChange.bind(this, 'Denuncias')} href={'#'}>Denuncias</a>
                    </li>                    
                    <li className="nav-item">
                      <a className="nav-link" onClick={this.state.onChange.bind(this, 'Contactenos')} href={'#'}>¡Contáctenos!</a>
                    </li>
                    <li className="nav-item">
                       <a className="nav-link" onClick={this.state.onChange.bind(this, 'MiCuenta')} href={'#'}>Mi cuenta</a>
                    </li>               
                  </ul>                  
                </div>
                   <div className="navbar-collapse collapse w-100 order-3">
                    <ul className="navbar-nav ml-auto list-inline">  
                      <li className="nav-item">
                          <a className="nav-link" onClick={this.state.onLogOut.bind(this)} href={'#'}> 
                          <i className="fas fa-door-open"></i> <br/>
                          Logout</a>
                      </li>                              
                      <li className="nav-item list-inline-item">
                        <a className="nav-link" onClick={this.state.onChange.bind(this, 'Denuncia')}  href={'#'}>
                        <i className="fas fa-exclamation-circle"></i> <br/> Denuncie! 
                        </a>
                      </li>                   
                    </ul>            
                </div>
              </div>
            </nav>                   
          </div>
      );        
    }
}

export default NavBar;