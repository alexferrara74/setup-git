import React, { useState,useEffect } from "react";
import '../css/card.css';


function Card(props){

    const [classe,setClasse]= useState(props.classe);
    const [aos,setAos]= useState(props.aos);
    const [duration,setDuration]= useState(props.duration);
    const [foto,setFoto]= useState(props.foto);
    const [testo,setTesto]= useState(props.testo);


    return(
        <div id={classe} data-aos={aos} 
        data-aos-duration={duration} onClick={this.props.funzione} >
            <div id="fotocard">
                <img src={foto} alt="fotocard"/>
            </div>
                <div id="testo-card">
                    <h1>{testo}</h1>
                </div>

        </div>

    );
}
export default Card;