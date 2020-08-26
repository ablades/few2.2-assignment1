import React from 'react'

function Vampire() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'white',
        border: '5px solid black',
    }

    const mouth = {
        borderTop: '10px solid black',
        borderLeft: '20px solid black',
        borderRight: '20px solid black',
        borderBottom: '20px solid transparent',
        width: '25px',
        height: '0px',
        transform: 'translate(15px, 10px)',

    }

    const eye1 = {
        width: '15px',
        height: '15px',
        borderRadius: '5px 50px 50px 50px',
        border: '5px solid black',
        backgroundColor: 'white',
        transform: 'translate(10px, 25px)'
    }

    const eye2 = {
        width: '15px',
        height: '15px',
        borderRadius: '50px 5px 50px 50px',
        border: '5px solid black',
        backgroundColor: 'white',
        transform: 'translate(55px, 0px)'
    }

    const eyeball = {
        width: '1px',
        height: '0px',
        border: '4px solid black',
        borderRadius: '100px',
        transform: 'translate(2px, 6px)'

    }

    return(
        <div className="mailbox" style={outerStyle}>
            <div className="eye" style={eye1}>
                <div className="eyeball" style={eyeball}></div>
            </div>

            <div className="eye" style={eye2}>
                <div className="eyeball" style={eyeball}></div> 
            </div>

            <div className="rect" style={mouth}></div>
        </div>
    )
}

export default Vampire