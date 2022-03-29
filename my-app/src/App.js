
import React, { Component, useRef } from 'react';
import './css/grafica.css'
import Navbar from './components/navbar';
import Sfondo from './components/sfondo';
import sfondo from './img/sfondo.jpg'
import Card from './components/card';

class App extends Component {
  state= {cards:[
    
  ]}
   

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
        <div id='secondapagina' >
          

        </div>



    </>
  );
  }
}


export default App;
