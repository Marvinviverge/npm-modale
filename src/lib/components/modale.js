import React from 'react'
import './styles/modale.css'

const Modale = ({messageModale, messageButton, buttonFunction, isOpen}) => {

    return (
        <div className="modale" style={{display: isOpen ? 'block' : 'none'}}>
            <div className="modal-close-container">
                <div className="modale-close">
                    X
                </div>
            </div>
            <div className="message-content">
                <h1 className="message-modale">{messageModale}</h1>
                <button className="button-modale" onClick={buttonFunction}>
                    {messageButton}
                </button>
            </div>
        </div>
    )
}
export default Modale