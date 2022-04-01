
import React, { Component, useRef } from 'react';
import './css/grafica.css'
import Navbar from './components/navbar';
import Sfondo from './components/sfondo';
import sfondo from './img/sfondo.jpg'
import Card from './components/card';



class App extends Component {
  constructor(props) {
    super(props);
    this.secondapagina = React.createRef();
    this.terzapagina = React.createRef();
    this.quartapagina = React.createRef();
    this.primapagina = React.createRef();
  }
  pagina1=()=>this.primapagina.current.scrollIntoView({behavior:"smooth"});
  pagina2=()=>this.secondapagina.current.scrollIntoView({behavior:"smooth"});
  pagina3=()=>this.terzapagina.current.scrollIntoView({behavior:"smooth"});
  pagina4=()=>this.quartapagina.current.scrollIntoView({behavior:"smooth"});

  state= {cards:[]}
    aggiungi=()=>{
     
      const cards=[{id:0, testo:"bracciale" , foto:sfondo},
      {id:1, testo:"bracciale" , foto:sfondo},
      {id:2, testo:"bracciale" , foto:sfondo},
      {id:3, testo:"bracciale" , foto:sfondo}]
      this.setState({cards});
     
    }
   
    remove=()=>{
      const cards=[];
      this.setState({cards});    }

    

  render(){
  return (
    <>
   
      <Navbar 
      scrolla2={this.pagina2}
      scrolla3={this.pagina3}
      scrolla4={this.pagina4}
      agg={this.aggiungi}
      remove={this.remove}/>
      <Sfondo valore={sfondo} />
    
    <div id='card-container'>
      {this.state.cards.map(card=> (
        <Card 
        key={card.id}
        testo={card.testo}
        foto={card.foto}
        />
      ))}
    </div>
        <div id='secondapagina' ref={this.secondapagina}>
        <Navbar
        scrolla1={this.pagina1}
        scrolla3={this.pagina3}
        scrolla4={this.pagina4}/>
        <Sfondo valore={sfondo} />
        </div>
        <div id='terzapagina' ref={this.terzapagina}>
        <Navbar
        scrolla1={this.pagina1}
        scrolla2={this.pagina2}
        scrolla4={this.pagina4} />
        <Sfondo valore={sfondo} />
        </div>

        <div id='quartapagina' ref={this.quartapagina}>
        <Navbar
        scrolla1={this.pagina1}
        scrolla2={this.pagina2}
        scrolla3={this.pagina3}/>
        <Sfondo valore={sfondo} />
        </div>



    </>
  );
  }
}


export default App;
