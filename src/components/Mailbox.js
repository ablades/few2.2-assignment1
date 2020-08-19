import React from 'react'

function Mailbox() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'white',
        border: '5px solid black',
    }

    const innerStyle = {
        width: '75px',
        height: '25px',
        backgroundColor: 'black',
        transform: 'translate(13px, 20px)',
    }

    return(
        <div className="mailbox" style={outerStyle}>
            <div className="rect" style={innerStyle}>

            </div>
        </div>
    )
}

export default Mailbox