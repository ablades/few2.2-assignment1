import React from 'react'

function Robot() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'lightgrey',
        border: '5px solid black',
    }

    const innerStyle = {
        width: '60px',
        height: '15px',
        backgroundColor: 'red',
        borderRadius: '10px',
        border: '5px solid black',
        transform: 'translate(12px, 20px)'

    }

    const eye1 = {
        width: '15px',
        height: '15px',
        borderRadius: '50px',
        border: '5px solid black',
        backgroundColor: 'red',
        transform: 'translate(10px, 25px)'
    }

    const eye2 = {
        width: '15px',
        height: '15px',
        borderRadius: '100px',
        border: '5px solid black',
        backgroundColor: 'red',
        transform: 'translate(55px, 0px)'
    }

    return(
        <div className="mailbox" style={outerStyle}>
            <div className="eye" style={eye1}></div>
            <div className="eye" style={eye2}></div>
            <div className="rect" style={innerStyle}></div>
        </div>
    )
}

export default Robot