import React from 'react'


function Circle() {
    const styles = {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        borderRadius: '50px',
    }

    return(
        <div className="circle" style={styles}>
        </div>
    )
}

export default Circle