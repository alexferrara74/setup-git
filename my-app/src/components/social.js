import React from "react";
import social1 from '../img/facebook.png';
import social2 from '../img/instagram.png';
import '../css/grafica.css';
function Social(){

    return(
        <div id="social">
           <a href="https://www.facebook.com/desyhomedecor/"><img class="iconasocial"src={social1}></img></a>
           <a href="https://www.instagram.com/desy_homedecor/"> <img class="iconasocial" src={social2}></img></a>
        </div>

    );
}
export default Social;