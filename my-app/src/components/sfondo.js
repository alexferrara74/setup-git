import { Component } from "react";
import '../css/grafica.css'


class Sfondo extends Component{
    render(){
        return(

            <img id="imgsfondo" src={this.props.valore} alt=""/>
            
        );

    }




}
export default Sfondo;