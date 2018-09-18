import React, {Component} from "react";

class Contact extends Component{

  render(){
    return(
      <div className="page contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 title text-center">
              <h1>Hablanos!</h1>
            </div>
            <div className="col-lg-8 content">
              <form >
                <div className="form-group">
                  <label>Nombre</label>
                  <input className="form-control" type="text"/>
                </div>
                <div className="form-group">
                  <label>Correo</label>
                  <input className="form-control" type="email"/>
                </div>
                <div className="form-group">
                  <label>Asunto</label>
                  <input className="form-control" type="text"/>
                </div>
                <div className="form-group">
                  <label>Mensaje</label>
                  <textarea className="form-control" rows="4" required="required"/>
                </div>
                <button type="submit" className="btn">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;