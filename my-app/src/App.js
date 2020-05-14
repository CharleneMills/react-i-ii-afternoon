import React, { Component } from 'react'
import './App.css';
import data from './data.js';
import User from './components/User.js';
import Header from './components/Header.js';
import Controls from './components/Controls.js';


class App extends Component {
  
constructor() {
  super()

  this.state ={
    directory: data,
    currentUser: 0
  }

  this.nextUser = this.nextUser.bind(this)
  this.previousUser = this.previousUser.bind(this)

}


previousUser(){
  this.setState({
    currentUser: this.state.currentUser - 1
  })
}



nextUser(){
  this.setState({
    currentUser: this.state.currentUser + 1
  })
}



  render(){
    console.log(this.state.directory)
        const users = this.state.directory.map(elem => {
         return (
          <div>
              <User key={elem.id} userProp={elem} numPeople={this.state.directory.length}/>
          </div>
         )
       }) 


    return (
      <div className="App">
        <Header />
        {users[this.state.currentUser]}
        
        <Controls nextUser={this.nextUser} previousUser={this.previousUser}/>
      </div>
    );
  } 
}

export default App;
