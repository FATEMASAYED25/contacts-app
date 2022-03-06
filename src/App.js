import React, { Component } from 'react';
import * as ContactsAPI from './utils/ContactsAPI'
import ListContacts from './utils/ListContacts';
import CreatContact from './CreatContact';
import { Route } from 'react-router-dom';
class App extends Component {
  state = {
    contacts :[
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }
//revoking contact api as a backend server 

componentDidMount() {
  ContactsAPI.getAll()
    .then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
    console.log(this.state.contacts)
}

  createContact = (contact) => {
   
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
       
      }
      
  
 
  render() {
    return (
      <div>
     
      <Route exact path='/'render={()=>( <ListContacts  contacts={this.state.contacts}/>)} />
      <Route path='/create' render={({ history }) => (
          <CreatContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
  
      </div>
    );
  }
}

export default App;
