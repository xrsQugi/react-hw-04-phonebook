import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }


    nameInputId = nanoid();
    telInputId = nanoid();

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
            <form onSubmit={this.formSubmit} className={css.form_phonebook}>
                <label htmlFor={this.nameInputId} className={css.label_text}>Name</label>
                <input
                    id={this.nameInputId}
                    className={css.input_place}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder='Enter your name'
                    value={this.state.name}
                    onChange={this.inputChange}
                />
                <label htmlFor={this.telInputId} className={css.label_text}>Number</label>
                <input
                    id={this.telInputId}
                    className={css.input_place}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder='Enter your number'
                    value={this.state.number}
                    onChange={this.inputChange}
                />
                <button type="submit" className={css.btn_add}>Add contact</button>
            </form>
        )
    }
}
