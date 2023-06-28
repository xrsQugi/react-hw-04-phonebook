//! components
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

//! other libraries
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//! styles
import css from "./App.module.css";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  allFormSubmit = (data) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    const existingNumber = this.state.contacts.find(
      contact => contact.number === data.number
    );
    
    if (existingContact) {
      return Notify.failure(`${data.name} is already in contacts.`);
    }
    else if (existingNumber){
      return Notify.failure(`Number ${data.number} is already in exist`);
    }
    this.setState({
      contacts: [{id: nanoid(), name: data.name, number: data.number}, ...this.state.contacts]
    });
  
    // console.log(this.state.contacts);
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    // string преобразуеться в true, кроме пустой строки "" -- false
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  render() {
    
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.allFormSubmit}/>
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={this.filterContacts()} onDelete={this.deleteContact}/>
        {/* <ContactList contacts={this.state.contacts} onDelete={this.deleteContact}/> */}
      </div>
    )
  }
}
