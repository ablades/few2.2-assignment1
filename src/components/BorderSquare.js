import React from 'react'


function BorderSquare() {
    const styles = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        border: '5px solid black',
    }

    return(
        <div className="bordersquare" style={styles}>
        </div>
    )
}

export default BorderSquare