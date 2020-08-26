import React from 'react'

function Bird() {
    const outerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'skyblue',
        border: '5px solid black',
    }

    const body = {
        backgroundColor: 'blue',
        borderRadius: '50px 50px 50px 10px',
        width: '60px',
        height: '60px',
        transform: 'translate(15px, 0px)',

    }
    const body2 = {
        backgroundColor: 'blue',
        border: '5px solid black',
        borderRadius: '50px 50px 50px 10px',
        width: '40px',
        height: '40px',
        transform: 'translate(22px, -50px)',
        borderTop: '0px solid transparent',
        borderLeft: '0px solid transparent',
        borderRight: '5px solid black',
        borderBottom: '0px solid transparent',

    }

    const head = {
        width: '25px',
        height: '25px',
        borderRadius: '50px 50px 5px 50px',
        backgroundColor: 'blue',
        transform: 'translate(50px, 5px) rotate(-45deg)'
    }


    const eyeball = {
        width: '1px',
        height: '0px',
        border: '4px solid white',
        borderRadius: '100px',
        transform: 'translate(10px, 10px)'

    }

    return(
        <div className="mailbox" style={outerStyle}>
            <div className="head" style={head}>
                <div className="eyeball" style={eyeball}></div>
            </div>


            <div className="rect" style={body}></div>
            <div className="rect" style={body2}></div>
        </div>
    )
}

export default Bird