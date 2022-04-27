import React, { useState } from "react";
import foto from '../img/carmen.png'


function Biografia(props){
    const[funzione,setFunzione]=useState(props.scrolla);
    
        return(
            <div id="biografia">
                  <img id="imgbiografia" src={foto}></img>
                    <p id="testofoto"> CIAO, SONO CARMEN PISAPIA </p>
                    <p id="testobiografia">
                         E il mio lavoro è darti supporto, ispirazione e strumenti per creare e far crescere la tua attività con soddisfazione e successo. Come?
                         Aiutandoti a capire esattamente quali sono i tuoi veri obiettivi e desideri, 
                         individuare quello che puoi ottenere davvero dalla tua vita professionale e indicandoti come fare ad ottenerlo,
                         dandoti gli strumenti, le informazioni ed il supporto necessari per realizzare quello che desideri e creare il tuo Business del Cuore®.
                         Voglio contribuire a creare un mondo in cui le persone siano appassionate di ciò che fanno, un mondo in cui le persone si sveglino ogni giorno piene di entusiasmo e arrivino alla sera appagate e fiere di se stesse.
                    </p>
                <div id="btnbiografia">   
                <a href={()=>props.pulsante()} >Scrivimi</a>
                </div>
            </div>
        );
}export default Biografia;