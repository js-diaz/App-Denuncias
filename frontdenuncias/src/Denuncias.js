import React, {Component} from "react";


class Denuncias extends Component {

  //Zulma: Hola Juan! esto es react! y se que estamos cortos de tiempo pero podias haber hecho esto de una mejor manera creando un objeto con las denuncias
  // y dejando que react lo recorriera renderizandolo, yo lo hice para el carrusel de mi proyecto, te dejo el link donde puedes ver el ejemplo. 
  // Hace que tu codigo sea mucho mas reutilizable y te facilita a futuro el manejo de la base de datos 
  // https://github.com/zlcastaneda10/Swipe-and-Swap/blob/master/front/src/containers/LandingPage.js
  // revisa la lista de items y la forma en que mapeo los slides 
  //const slides = items.map((item) => {
  
  
render() { 
  return (
    <div class="container-fuid mr-sm-0 pt-md-4">
      <div class="row">
        <div class="col offset-md-4">
           <h4 class="myFont">Denuncias realizadas en los últimos días</h4>
        </div>   
      </div>
      <div class="row mr-sm-0 align-items-center">    
        <div class="row mr-sm-0 align-items-center">
            <div class="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div class="card border-primary mb-3 projects">
                  <div class="card-header">Fecha: 16/09/2018 & Hora: 10:14</div>                             
                  <div class="card-body text-primary">
                    <h5 class="card-title">Lugar: Estación Transmilenio Calle 45</h5>
                    <p class="card-text"> Me robaron mi celular con la modalidad de cosquilleo. No identifique a los ladrones </p>                    
                  </div>
                </div>                       
            </div>
            <div class="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div class="card border-primary mb-3 projects">
                  <div class="card-header">Fecha: 16/09/2018 & Hora: 10:14</div>                             
                  <div class="card-body text-primary">
                    <h5 class="card-title">Lugar: Estación Transmilenio Calle 45</h5>
                    <p class="card-text"> Me robaron mi celular con la modalidad de cosquilleo. No identifique a los ladrones </p>                    
                  </div>
                </div>                       
            </div>
            <div class="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div class="card border-primary mb-3 projects">
                  <div class="card-header">Fecha: 16/09/2018 & Hora: 10:14</div>                             
                  <div class="card-body text-primary">
                    <h5 class="card-title">Lugar: Estación Transmilenio Calle 45</h5>
                    <p class="card-text"> Me robaron mi celular con la modalidad de cosquilleo. No identifique a los ladrones </p>                    
                  </div>
                </div>                       
            </div>
        </div>
        <div class="row mr-sm-0 align-items-center">
            <div class="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div class="card border-primary mb-3 projects">
                  <div class="card-header">Fecha: 16/09/2018 & Hora: 10:14</div>                             
                  <div class="card-body text-primary">
                    <h5 class="card-title">Lugar: Estación Transmilenio Calle 45</h5>
                    <p class="card-text"> Me robaron mi celular con la modalidad de cosquilleo. No identifique a los ladrones </p>                    
                  </div>
                </div>                       
            </div>
            <div class="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div class="card border-primary mb-3 projects">
                  <div class="card-header">Fecha: 16/09/2018 & Hora: 10:14</div>                             
                  <div class="card-body text-primary">
                    <h5 class="card-title">Lugar: Estación Transmilenio Calle 45</h5>
                    <p class="card-text"> Me robaron mi celular con la modalidad de cosquilleo. No identifique a los ladrones </p>                    
                  </div>
                </div>                       
            </div>
            <div class="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div class="card border-primary mb-3 projects">
                  <div class="card-header">Fecha: 16/09/2018 & Hora: 10:14</div>                             
                  <div class="card-body text-primary">
                    <h5 class="card-title">Lugar: Estación Transmilenio Calle 45</h5>
                    <p class="card-text"> Me robaron mi celular con la modalidad de cosquilleo. No identifique a los ladrones </p>                    
                  </div>
                </div>                       
            </div>
        </div>
    </div> 
    </div>
    );
  }
}
export default Denuncias;
