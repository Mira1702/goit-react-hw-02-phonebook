import React, { Component } from 'react';
import Title from './Title';
import PhoneBook from './PhoneBook';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: []
  }

  formSubmitHandler = data => {
    console.log(data);
  }

  handleRemoveContact = (id) => 
  this.setState(({ contacts }) => ({ contacts: contacts.filter(contact => contact.id !== id) }))


  render() {
    const { contacts } = this.state
    return (
      <div>
        <Title title='Phonebook'/>
        <PhoneBook onSubmit={this.formSubmitHandler} />
        <Title title='Contacts' />
        <Contacts
          contacts={contacts}
          onRemove={this.handleRemoveContact}
        />
      </div>      
    )
  }
}

// const App = () => {
//   return (
//     <div>
//       <PhoneBook />
//     </div>
//   )
// }

export default App;