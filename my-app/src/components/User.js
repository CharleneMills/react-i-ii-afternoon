import React from 'react'

function User(props) {
    return (
    <div className="userBox">
        <div className="user-info">
            <h2>{props.userProp.name}</h2>
            <p><span>From:</span>{props.userProp.city}</p>
            <p><span>Job Title:</span>{props.userProp.title}</p>
            <p><span>Employer:</span>{props.userProp.employer}</p>
            <br/>
            <p><span>Favorite Movies:</span></p>
            <ul>
                <li>for loop here{props.userProp.movies}</li>
            </ul>
        </div>
    </div>
    )
}


export default User;