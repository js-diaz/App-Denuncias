import React, {Component} from "react";
import request from "superagent";


class Denuncia extends Component {

constructor(props) {
    super(props);

    this.denunciar = this.denunciar.bind(this);
  }

denunciar = (e) => {
    e.preventDefault();
    const body2 = JSON.stringify({ 
      user: this.props.id,     
      direccion: this.refs.direccion.value,
      fecha: this.refs.fecha.value,
      hora: this.refs.hora.value,
      barrio: this.refs.category.value,
      articulo: this.refs.articulo.value,
      modus: this.refs.modus.value,
      delincuentes: this.refs.delincuentes.value,
      descripcion: this.refs.descripcion.value
    });
    console.log(body2);
    request
      .post("/robos/")
      .set("Content-Type", "application/json")
      .send(body2)
      .end((err, res)=>{
        console.log(res);
        this.props.onSubmit();
      });     
  }

render() { 
      return (
      <div className="submit">
        <div className="title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Has tu denuncia aquí!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={this.denunciar}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Fecha</label>
                        <input name="fecha" ref="fecha" className="form-control" required type="date"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Hora</label>
                        <input name="hora" ref="hora" className="form-control" required type="time"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label> Barrio</label>
                        <select className="form-control js-search-category" name="category" ref="category" required data-placeholder="Choose Category" aria-hidden="true">
                          <option value="Other">Other</option>
                          <option value="Las aguas">Las Aguas</option>
                          <option value="Suba Centro">Suba Centro</option>
                          <option value="Bosa Laureles">Bosa Laureles</option>
                          <option value="Las Nieves">Las Nieves</option>
                          <option value="San Diego">San Diego</option>
                          <option value="La Soledad">La Soledad</option>
                        </select>
                      </div>
                    </div>

                  </div>
                  <div className="form-group">
                    <label>Direccion</label>
                    <input name="direccion" ref="direccion" className="form-control" required type="text"/>
                  </div>
                  <div className="form-group">
                    <label>Articulo robado</label>
                    <input name="articulo" ref="articulo" className="form-control" required type="text"/>
                  </div>
                  <div className="form-group">
                    <label>Modus Operandi</label>
                    <input name="modus" ref="modus" className="form-control" required type="text"/>
                  </div>
                  <div className="form-group">
                    <label>Delincuentes</label>
                    <textarea className="form-control" ref="delincuentes" rows="2" required="required"/>
                  </div>
                  <div className="form-group">
                    <label>Descripcion</label>
                    <textarea className="form-control" ref="descripcion" rows="4"/>
                  </div>
                  <button type="submit" className="btn btn-submit">Denunciar!</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
export default Denuncia;
