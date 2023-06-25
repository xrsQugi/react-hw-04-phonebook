import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';


export class App extends Component {

  state = {
    contacts: [],
    name: [],
    number: [],
  }

  allFormSubmit = (data) => {
    console.log("data from form: ", data);

    const {name, number} = data;

    this.state.name.push(name);
    this.state.number.push(number);

    console.log(this.state.name);
    console.log(this.state.number);
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.allFormSubmit}/>
      </div>
    )
  }
}
