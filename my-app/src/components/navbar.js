import React, {Component} from 'react';
import '../css/grafica.css'
import valore from '../img/free.png'

class Navbar extends Component{
        
    render(){
    return(
            
        <div id="barra">
                <div id="logo">
                        <img id='imglogo' src={valore} alt=""/>
                </div>
                <ul id="navbar"> 
                
                    <li class="pulsante" onClick={()=>this.props.scrolla1()}>Home</li>
                    <li class="pulsante" onClick={()=>this.props.scrolla2()}>Prodotti</li>
                    <li class="pulsante" onClick={()=>this.props.scrolla3()}>Tutorial</li>
                    <li class="pulsante" onClick={()=>this.props.scrolla4()}>Chi Sono</li>
                 </ul>
        </div>
        );
}
}
export default Navbar; 