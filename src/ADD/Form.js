import React, { Component } from 'react';

class Form extends React.Component {

    render() {
        return ( 
        <div class = "main" > 
        <h3 > Greetings < /h3>   
        <form id = "formInput" onSubmit = { this.props.handleFormSubmit } >
            <input id = "firstname"
            value = { this.props.newFirstname }
            type = "firstname"
            name = "firstname"
            placeholder = "Firstname"
            onChange = { this.props.handleInputChange }
            required / >
            <button type = "submit"
            value = "Submit" > Save < /button>
            <button type = "reset"
            value = "Reset" > Cancel < /button> 
            < /form > 
            < /div >
        );
    }
}

export default Form;