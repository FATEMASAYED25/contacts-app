import React, { Component } from 'react';
import contacts from "./data/contacts.json"
import ListContacts from './component/ListContacts';
import CreatContact from './component/CreatContact';
import { Route } from 'react-router-dom';
class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts")) || contacts
  };



createContact = (contact) => {
  const updated = [...this.state.contacts, contact];

  this.setState({ contacts: updated });
  localStorage.setItem("contacts", JSON.stringify(updated));
};
      
  
 
  render() {
    return (
      <div>
     
      <Route 
      exact 
      path='/' 
      render={()=>( 
      <ListContacts  contacts={this.state.contacts}/>)} />
      <Route path='/create' 
      render={({ history }) => (
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
