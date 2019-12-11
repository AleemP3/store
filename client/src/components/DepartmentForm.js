import React, {  } from 'react';
import { Form, } from "semantic-ui-react";
import axios from "axios"; 


class DepartmentForm extends React.Component {

state = { name: "" }


handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submit = (e) => {
  e.preventDefault(); 
  axios.post("/api/departments", this.state)
    .then(res => {
      this.props.history.push("/departments")
    })
    this.setState({name: "" });
}

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Input 
          name="name"
          placeholder="Name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <Form.Button color="blue">Submit</Form.Button>
      </Form>
    );
  };
};

export default DepartmentForm;
