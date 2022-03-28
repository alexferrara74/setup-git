import React from "react";
import PropTypes from 'prop-types'

//props-> attributi custom
function button(props){
    const {clickevento,text}=props;
    return <button onClick={clickevento}>{text}</button>
}
button.PropTypes={
    text: PropTypes.string.isRequired,
    clickevento:PropTypes.func.isRequired
}

button.defaultProps={
    text:"cliccami"
}
export default button