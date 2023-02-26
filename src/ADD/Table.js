import React from "react";
import Form from "./Form";

class Table extends React.Component {
  state = {
    isEdit: false,
    newFirstname: "",
    id: "",
  };

  updateItem = (item) => {
    this.setState({ isEdit: true, id: item.id });
  };

  handleInputChange = (e) => {
    this.setState({ newFirstname: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.state);
    this.setState({ isEdit: false });
  };

  render() {
    const items = this.props.items;

    return (
      <div id="Table">
        <table class="tdgreeting" border="1" frame="void" rules="rows">
          <tbody>
            <tr>
              <th> Id </th>
              <th> FirstName </th>
              <th> Edit </th>
            </tr>
            {items.map((item) => {
              return (
                <tr>
                  <td> {item.id} </td>
                  <td> {item.firstname} </td>
                  <td>
                    {" "}
                    <button
                      class="btnStyle"
                      onClick={() => this.updateItem(item)}
                    >
                      {" "}
                      Edit{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.isEdit ? (
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
           />
        ) : null}
      </div>
    );
  }
}
export default Table;