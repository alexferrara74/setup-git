import React from 'react';
import button from './bottone';
function card(){
    const[text,setText]=useState("cliccami");
return(
    <div>
        <p>Ciao Mondo</p>
        <button text={text}/>
        <button text="CLICCAMI SUBITO" />
    </div>
);

}
export default card;