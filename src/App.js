import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: [],
      pictures: "",
      name: ""
    }
  }

  updatePicture(newPictureString){
    this.setState({
      picture: newPictureString
    })
  }

  updateName(newNameString){
    this.setState({
      name: newNameString
    })
  }

  addFriend(newFriend){
    this.state.friends.push(
      {
        name: this.state.name,
        friends: this.state.picture
      }
    )
    this.setState({
      friends: this.state.friends
    })
  }

  render() {

    var friendsJSX = this.state.friends.map((friend) => {
      <div>
        <img src={friend.picture}/>
        <span>{friend.name}</span>
      </div>
    })

    return (
      <div>
        Pictures:
        <input onChange={ ( event )  => this.updatePicture( event.target.value )  } />
        Name:
        <input onChange={ ( event ) => this.updateName( event.target.value ) }/>
        <button onClick={ ( event ) => this.addFriend() }>Add Friend</button>
        {
          friendsJSX
        }
      </div>
    );
  }
}

export default App;
