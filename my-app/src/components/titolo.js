import React, { useState,useEffect } from "react";
import '../css/card.css';

function Titolo(props){
   
    const [testo,setTesto]=useState(props.titolo);
    const [testopiccolo,setTestopiccolo]=useState("Decorazioni per tutti i gusti ")
    const [aos,setAos]=useState(props.aos)
    const [duration,setDuration]=useState(props.durata)
    
    return(
        <div id="titolo"  data-aos={aos} 
        data-aos-duration={duration} >
            <p className="testo">{testo}</p>
            <p className="testopiccolo">{testopiccolo}</p>
        </div>
    );
}
export default Titolo;