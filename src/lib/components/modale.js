import React from 'react'
import './styles/modale.css'

const Modale = (props) => {

    return (
        <div className="modale">
            <div className="modal-close-container">
                <div className="modale-close">
                    X
                </div>
            </div>
            <div className="message-content">
                <h1 className="message-modale">{props.messageModale}</h1>
                <button className="button-modale" onClick={props.buttonFunction}>
                    {props.messageButton}
                </button>
            </div>
        </div>
    )
}
export default Modale