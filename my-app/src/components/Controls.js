import React from 'react'


function Controls(props) {


    return (
    <div className="controls">
        <button onClick={props.previousUser}>Previous User</button>
        <button onClick={props.nextUser}>Next User</button>
    </div>
    )
}


export default Controls;