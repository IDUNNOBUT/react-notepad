import React from "react";
import './ControlButton.css'

const ControlButton = (props) => {
    return (
        <button className={'Control-button'} type={'button'} style={props.style} onMouseDown={(e) => {
            e.preventDefault();
            document.execCommand(props.type, false);
        }}>{props.icon}</button>
    );
}

export default ControlButton;