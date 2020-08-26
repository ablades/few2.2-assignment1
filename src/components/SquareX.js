import React from 'react'

function SquareX() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'white',
        border: '5px solid black',
    }

    const cross1 = {
        width: '75px',
        height: '25px',
        backgroundColor: 'black',
        transform: 'translate(13px, 35px) rotate(45deg)',
        marginBottom: '12px'
    }

    const cross2 = {
        width: '75px',
        height: '25px',
        backgroundColor: 'black',
        transform: 'translate(13px, 0px) rotate(130deg)',
        marginBottom: '12px'
    }




    return(
        <div className="mailbox" style={outerStyle}>
            <div className="rect" style={cross1}></div>
            <div className="rect" style={cross2}></div>
        </div>
    )
}

export default SquareX