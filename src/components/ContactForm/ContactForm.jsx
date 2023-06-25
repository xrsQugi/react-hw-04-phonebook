import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {

    state = {
        contacts: [],
        name: '',
        number: ''
    }


    nameId = nanoid();

    inputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState( {
            name: '',
            number: '',
        });
      };

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.inputChange}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.inputChange}
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}
