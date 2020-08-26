import React from 'react'

function Arrow() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'white',
        border: '5px solid black',
        borderRadius: '75px'
    }

    const line = {
        width: '40px',
        height: '5px',
        backgroundColor: 'black',
        transform: 'translate(25px, 50px)',
        marginBottom: '12px'
    }

    const line1 = {
        width: '25px',
        height: '5px',
        backgroundColor: 'black',
        transform: 'translate(45px, 26px) rotate(-140deg)',
        marginBottom: '12px'
    }

    const line2 = {
        width: '25px',
        height: '5px',
        backgroundColor: 'black',
        transform: 'translate(45px, 23px) rotate(140deg)',
        marginBottom: '12px'
    }




    return(
        <div className="mailbox" style={outerStyle}>
            <div className="rect" style={line}></div>
            <div className="rect" style={line1}></div>
            <div className="rect" style={line2}></div>
        </div>
    )
}

export default Arrow