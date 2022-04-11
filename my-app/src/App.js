
import React, { Component, useRef } from 'react';
import './css/grafica.css'
import Navbar from './components/navbar';
import Sfondo from './components/sfondo';
import sfondo from './img/sfondo.jpg'
import sfondo2 from './img/pagina2.jpeg'
import sfondo3 from './img/pagina3.jpeg'
import Card from './components/card';
import "aos/dist/aos.css"


class App extends Component {
  constructor(props) {
    super(props);
    this.secondapagina = React.createRef();
    this.terzapagina = React.createRef();
    this.quartapagina = React.createRef();
    this.homepage = React.createRef();
  }
  pagina1=()=>this.homepage.current.scrollIntoView({behavior:"smooth"});
  pagina2=()=>this.secondapagina.current.scrollIntoView({behavior:"smooth"});
  pagina3=()=>this.terzapagina.current.scrollIntoView({behavior:"smooth"});
  pagina4=()=>this.quartapagina.current.scrollIntoView({behavior:"smooth"});

  prodotti=[{id:0, testo:"bracciale" , foto:sfondo,  classe:"prodotti",aos:"fade-up",duration:"000"},
                {id:1, testo:"bracciale" , foto:sfondo , classe:"prodotti1",aos:"fade-up",duration:"3000"},
                {id:2, testo:"bracciale" , foto:sfondo, classe:"prodotti2",aos:"fade-up",duration:"3000"},
                {id:3, testo:"bracciale" , foto:sfondo, classe:"prodotti3",aos:"fade-up",duration:"3000"}
                ];
  render(){
  return (
    <>   

      <div id='homepage' ref={this.homepage}>
        <Navbar
        scrolla1={this.pagina1}
        scrolla2={this.pagina2}
        scrolla3={this.pagina3}
        scrolla4={this.pagina4}
        
        />
        <Sfondo valore={sfondo} />
        </div>

        <div id='secondapagina' data-aos="" ref={this.secondapagina}>
        <div id='card-container'>
      {this.prodotti.map(prodotti=> (
        <Card 
        classe={prodotti.classe}
        aos={prodotti.aos}
        duration={prodotti.duration}
        key={prodotti.id}
        testo={prodotti.testo}
        foto={prodotti.foto}
        />
      ))}
    </div>
        <Sfondo valore={sfondo2} />
        </div>

      

        <div id='terzapagina' ref={this.terzapagina}>
        <Sfondo valore={sfondo3} />
        </div>

        <div id='quartapagina' ref={this.quartapagina}>      
        <Sfondo valore={sfondo} />
        </div>



    </>
  );
  }
}


export default App;
