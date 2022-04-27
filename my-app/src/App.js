
import React, { Component, useRef } from 'react';
import './css/grafica.css'
import Navbar from './components/navbar';
import Sfondo from './components/sfondo';
import Container from './components/card-container';
import sfondo from './img/sfondo.jpg'
import tabelle from './img/tabelle.jpeg'
import accessori from './img/accessori.jpg'
import decorazioni from './img/decorazioni.jpeg'
import sfondo2 from './img/pagina2.jpeg'
import sfondo3 from './img/pagina3.jpeg'
import "aos/dist/aos.css"
import Titolo from './components/titolo';
import ReactDOM from 'react-dom';
import Refresh from './components/refresh';
import Social from './components/social';
import Biografia from './components/chisono';
import Form from './components/form';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.secondapagina = React.createRef();
    this.terzapagina = React.createRef();
    this.quartapagina = React.createRef();
    this.homepage = React.createRef();
    this.paginaform= React.createRef();
  }
  
  pagina1=()=>this.homepage.current.scrollIntoView({behavior:"smooth"});
  pagina2=()=>this.secondapagina.current.scrollIntoView({behavior:"smooth"});
  pagina3=()=>this.terzapagina.current.scrollIntoView({behavior:"smooth"});
  pagina4=()=>this.quartapagina.current.scrollIntoView({behavior:"smooth"});
  form=()=>this.paginaform.current.scrollIntoView({behavior:"smooth"});

  
  risultato=[];
  prodotti =[
    {id:0, testo:"Centrotavola" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",descrizione:"Prodotto creato a mano ",duration:"2000"},
    {id:1, testo:"Bracciale" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:2, testo:"Fuoriporta" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:3, testo:"Collana perle" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:4, testo:"Appendino" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:5, testo:"bracciale4" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:6, testo:"bracciale5" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:7, testo:"Centrotavola" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",descrizione:"Prodotto creato a mano ",duration:"2000"},
    {id:8, testo:"Bracciale" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:9, testo:"Fuoriporta" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:10, testo:"Collana perle" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:11, testo:"Appendino" , foto:sfondo ,categoria:"Decorazioni", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:12, testo:"bracciale4" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"},
    {id:13, testo:"bracciale5" , foto:sfondo ,categoria:"Accessori", classe:"prodotti",aos:"fade-up",descrizione:"",duration:"2000"}
  ];

  categorie =[
    {id:0, testo:"Decorazioni" , categoria:"Decorazioni",foto:decorazioni,  classe:"categoria",aos:"fade-up",duration:"2000"},
    {id:1, testo:"Accessori" , foto:accessori ,categoria:"Accessori", classe:"categoria",aos:"fade-up",duration:"2000"},
    {id:2, testo:"Tabelle" , foto:tabelle,categoria:"Tabelle", classe:"categoria",aos:"fade-up",duration:"2000"}
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

      <div id='homepage'  data-aos="" ref={this.homepage}>
        <Navbar
        scrolla1={this.pagina1}
        scrolla2={this.pagina2}
        scrolla3={this.pagina3}
        scrolla4={this.pagina4}        
        />
        <Titolo titolo={"DESYHOMEDECOR"} aos={"fade-down"} durata={"3000"}/>
          <Social/>
        
        </div>

        <div id='secondapagina' data-aos="" ref={this.secondapagina}>
        <Container prodotto={this.categorie} funzione={this.scelta}/>
    
        </div>

        <div id='terzapagina' ref={this.terzapagina}>
        
        </div>

        <div id='quartapagina' data-aos="" ref={this.quartapagina}>  
        <Biografia  pulsante={this.form} />    
        
        </div>

        <div id='paginaform' data-aos="" ref={this.paginaform}>
        <Form/>
        </div>

    </>
  );
  }
}


export default App;
