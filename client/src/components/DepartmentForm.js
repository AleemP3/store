import React, {  } from 'react';
import { Form, Button } from "semantic-ui-react";
import axios from "axios"; 


class DepartmentForm extends React.Component {

state = { name: "" }

componentDidMount() {
  if (this.props.match.params.id)
  this.setState({name: this.props.match.params.name})
}


handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

submit = (e) => {
  e.preventDefault(); 
  if (this.props.match.params.id) {
  axios.put(`/api/departments/${this.props.match.params.id}`, this.state)
  .then(res => {
    this.props.history.push("/departments")
  }) } 
  else {
  axios.post("/api/departments", this.state)
    .then(res => {
      this.props.history.push("/departments")
    })
  }
    this.setState({name: "" });
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
        <Form.Button color="blue">Submit</Form.Button>
        <br />
        <Button color="yellow" onClick={() => this.props.history.goBack()}>Back</Button>
      </Form>
      </>
    );
  };
};

export default DepartmentForm;
