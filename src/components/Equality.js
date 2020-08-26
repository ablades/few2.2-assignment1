import React from 'react'

function Equality() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        border: '5px solid black',
    }

    const innerStyle = {
        width: '75px',
        height: '25px',
        backgroundColor: 'yellow',
        transform: 'translate(13px, 20px)',
        marginBottom: '12px'
    }




    return(
        <div className="mailbox" style={outerStyle}>
            <div className="rect" style={innerStyle}></div>
            <div className="rect" style={innerStyle}></div>
        </div>
    )
}

export default Equality