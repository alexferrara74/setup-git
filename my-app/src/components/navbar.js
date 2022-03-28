import React, {Component} from 'react';
import '../css/grafica.css'
import valore from '../img/free.png'
import Card from './card';
class Navbar extends Component{
    render(){
    return(
        <div id="barra">
                <div id="logo">
                        <img id='imglogo' src={valore} alt=""/>
                </div>
                <ul id="navbar"> 
                
                    <li class="pulsante" onClick={()=>this.props.agg()} >Home</li>
                    <li class="pulsante" >Prodotti</li>
                    <li class="pulsante">Tutorial</li>
                    <li class="pulsante">Chi Sono</li>
                 </ul>
        </div>
        );
}
}
export default Navbar; 