import React, { useState,useEffect } from "react";
import '../css/card.css';
import Card from "./card";
import sfondo from '../img/sfondo.jpg'
import sfondo2 from '../img/pagina2.jpeg'
import sfondo3 from '../img/pagina3.jpeg'

function Container(props){
const prodotti=props.prodotto;
const funzione=props.funzione;


return(
    <div id='card-container'>
    {prodotti.map(prodotti=> (
      <Card
        funzione={props.funzione}
        classe={prodotti.classe}
        aos={prodotti.aos}
        duration={prodotti.duration}
        key={prodotti.id}
        testo={prodotti.testo}
        foto={prodotti.foto}
      />
      ))}
    </div>
);
}
export default Container;
