import React from 'react'


function AltSquare() {
    const styles = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        border: '5px solid black',
        borderRadius: '0px 0px 0px 50px'
    }

    return(
        <div className="altsquare" style={styles}>
        </div>
    )
}

export default AltSquare