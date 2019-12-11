import React, {  } from 'react';
import { Form, Button } from "semantic-ui-react";
import axios from "axios"; 


class ItemForm extends React.Component {

state = { name: "", description: "", cost: "" }


handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submit = (e) => {
  e.preventDefault(); 
  axios.post(`/api/departments/${this.props.match.params.id}/items`, this.state)
    .then(res => {
      this.props.history.push(`/departments/${this.props.match.params.id}`)
    })
    this.setState({name: "", description: "", cost: "" });
}

  render() {
    return (
      <>
      <Form onSubmit={this.submit}>
        <Form.Input 
          name="name"
          placeholder="Name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <Form.Input 
          name="description"
          placeholder="Description"
          label="Description"
          value={this.state.description}
          onChange={this.handleChange}
          required
        />
        <Form.Input 
          name="cost"
          placeholder="Cost"
          label="Cost"
          type="number"
          value={this.state.cost}
          onChange={this.handleChange}
          required
        />
        <Form.Button color="blue">Submit</Form.Button>
      </Form>
      <br />
      <Button color="yellow" onClick={() => this.props.history.goBack()}>Back</Button>
      </>
    );
  };
};

export default ItemForm;
