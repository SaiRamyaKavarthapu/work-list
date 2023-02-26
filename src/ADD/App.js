import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            id: 1,
            firstname: '',
            items: []
        }
    };
 handleFormSubmit = (e) => {
        e.preventDefault();

        let items = [...this.state.items];

        items.push({
            id: this.state.id,
            firstname: this.state.firstname,

        });

        this.setState({
            items,
            id: this.state.id + 1,
            firstname: '',

        });
    };
  handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };
    onUpdate = (item) => {
        const updatedData = this.state.items.map((x) =>
          x.id === item.id ? { ...x, firstname: item.newFirstname } : x
        );
        this.setState({ items: updatedData });
      };
 render() {
        return ( 
        <div className = "App" >
            <Form handleFormSubmit = { this.handleFormSubmit }
            handleInputChange = { this.handleInputChange }
            newId = { this.state.id }
            newFirstname = { this.state.firstname }/> 
            <Table items = { this.state.items } onUpdate={this.onUpdate}/> 
        </div >
        );
    }
}
export default App;