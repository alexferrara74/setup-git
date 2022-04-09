import React, { Component } from "react";
import '../css/card.css';


class Card extends Component{
    
render(){
 
    return(
        <div id={this.props.classe} data-aos={this.props.aos} 
        data-aos-duration={this.props.duration} >
            <div id="fotocard">
                <img src={this.props.foto} alt="fotocard"/>
            </div>
                <div id="testo-card">
                    <h1>{this.props.testo}</h1>
                </div>

        </div>

    );
}

}
export default Card;