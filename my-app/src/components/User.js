import React from 'react'


function User(props) {

    const arrLength = props.numPeople;
    
    const favMovies = props.userProp.favoriteMovies.map(elem => {
        return (
             <li>{elem}</li> 
        )
      }) 

    return (
    <div className="userBox">
        <div className="userNumber">{props.userProp.id} / {arrLength}</div>
        <div className="userInfo">
            <h2>{props.userProp.name.first} {props.userProp.name.last}</h2>
            <p><strong>From:</strong> {props.userProp.city}</p>
            <p><strong>Job Title:</strong> {props.userProp.title}</p>
            <p><strong>Employer:</strong> {props.userProp.employer}</p>
            <br/>
            <p><strong>Favorite Movies:</strong></p>
            <ol>
                {favMovies}
            </ol>
        </div>
    </div>
    )
}


export default User;