import React from 'react'


function Leaf() {
    const styles = {
        width: '100px',
        height: '100px',
        backgroundColor: 'green',
        border: '5px solid black',
        borderRadius: '0px 50px 50px 50px'
    }

    return(
        <div className="leaf" style={styles}>
        </div>
    )
}

export default Leaf