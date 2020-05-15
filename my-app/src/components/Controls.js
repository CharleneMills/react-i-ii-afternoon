import React from 'react'


function Controls(props) {


    return (
    <div className="controls">
        <button onClick={props.previousUser}> &lt; Previous User</button>
        <button onClick={props.nextUser}>Next User &gt; </button>
    </div>
    )
}


export default Controls;