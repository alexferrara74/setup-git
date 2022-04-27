import React, {Component} from 'react';
import '../css/grafica.css'
import valore from '../img/desy.png'

export default function Navbar(props){
        
   
    return(
            
        <div id="barra">
                <div id="logo">
                        <img id='imglogo' src={valore} alt=""/>
                </div>

                <ul id="navbar">          
                    <li class="pulsante" onClick={()=>props.scrolla1()}>Home</li>
                    <li class="pulsante" onClick={()=>props.scrolla2()}>Prodotti</li>
                    <li class="pulsante" onClick={()=>props.scrolla3()}>Tutorial</li>
                    <li class="pulsante" onClick={()=>props.scrolla4()}>Chi Sono</li>
                </ul>
        </div>
        );
}

 