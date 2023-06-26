import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from "./App.module.css";


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: "",
    number: "",
  }

  allFormSubmit = (data) => {

    this.setState({
      contacts: [{id: nanoid(), name: data.name, number: data.number}, ...this.state.contacts]
    });

    // console.log(this.state.contacts);
  }

  render() {
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.allFormSubmit}/>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
}
