import React, { useState,useEffect } from "react";
import '../css/card.css';
import Card from "./card";
import sfondo from '../img/sfondo.jpg'
import sfondo2 from '../img/pagina2.jpeg'
import sfondo3 from '../img/pagina3.jpeg'

function Container(props){
const prod=props.prodotto;
const [dato,setDato]=useState(props.datoinput);
const prodotti=[];

function sceltacateg(valore){
for (let index = 0; index < prod.length; index++) {
    if(prod[index].categoria==valore||prod[index].classe=="categoria"){
        prodotti.push(prod[index]);
    }
                          
}


}


return(
    <div id='card-container'>
        {sceltacateg(dato)}
    {prodotti.map(prodotti=> (
      <Card
      funzione={props.funzione}
       categoria={prodotti.categoria}
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
