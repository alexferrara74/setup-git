
import React, { Component, useRef } from 'react';
import './css/grafica.css'
import Navbar from './components/navbar';
import Sfondo from './components/sfondo';
import Container from './components/card-container';
import sfondo from './img/sfondo.jpg'
import sfondo2 from './img/pagina2.jpeg'
import sfondo3 from './img/pagina3.jpeg'
import Card from './components/card';
import "aos/dist/aos.css"

import ReactDOM from 'react-dom';
import Refresh from './components/refresh';


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
  
  risultato=[];
  prodotti =[
    {id:0, testo:"bracciale1" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",duration:"3000"},
    {id:1, testo:"bracciale2" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",duration:"3000"},
    {id:2, testo:"bracciale" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",duration:"3000"},
    {id:3, testo:"bracciale3" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",duration:"3000"},
    {id:4, testo:"bracciale" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",duration:"3000"},
    {id:5, testo:"bracciale4" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",duration:"3000"},
    {id:6, testo:"bracciale5" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",duration:"3000"}
  ];

  categorie =[
    {id:0, testo:"Decorazioni" , categoria:"Decorazioni",foto:sfondo,  classe:"categoria",aos:"fade-up",duration:"3000"},
    {id:1, testo:"Accessori" , foto:sfondo ,categoria:"Accessori", classe:"categoria",aos:"fade-up",duration:"3000"},
    {id:2, testo:"Tabelle" , foto:sfondo,categoria:"Tabelle", classe:"categoria",aos:"fade-up",duration:"3000"}
  ];

  scelta=(valore)=>{
    ReactDOM.render(
      <React.StrictMode>
        <Container prodotto={this.prodotti} datoinput={valore}/> 
        <Refresh/>
      </React.StrictMode>,
      document.getElementById('card-container')
    )
          }

          ritorna=()=>{
            ReactDOM.render(
              <React.StrictMode>
                <Container prodotto={this.categorie} />
              </React.StrictMode>,
              document.getElementById('card-container')
            )
          }


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
        <Container prodotto={this.categorie} funzione={this.scelta}/>
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
