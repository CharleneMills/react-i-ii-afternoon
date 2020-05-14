import React, { Component } from 'react'
import './App.css';
import data from './data.js';
import User from './components/User.js';


class App extends Component {
  
constructor() {
  super()

  this.state ={
    directory: data
  }
}


  render(){

       const users = this.state.directory.map(elem => {
         return (
         <div>
            <User key={users.id} userProp={elem}/>
         </div>
         )
       }) 


    return (
      <div className="App">
        {users}
      </div>
    );
  } 
}

export default App;
