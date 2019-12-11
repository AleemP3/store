import React, {  } from 'react';
import axios from "axios"; 
import { Link, } from 'react-router-dom';
import { Container, Header, Card, Button} from "semantic-ui-react";


class Departments extends React.Component {

state = { departments: [], }


componentDidMount() {
  axios.get("/api/departments")
    .then(res => {
      this.setState({ departments: res.data })
    })
  }

  renderDepartment = () => {
    return this.state.departments.map(d => (
      <Card>
        <Card.Content>
          <Card.Header>{d.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button color="red" onClick={() => this.deleteDepartment(d.id)}>Delete</Button>
          <Button color="green" as={Link} to={`/departments/edit/${d.name}/${d.id}`}>Edit</Button>
          <Button color="blue" as={Link} to={`/departments/${d.id}`}>View</Button>
        </Card.Content>
      </Card>
    ))
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then(res => {
        this.setState({ departments: this.state.departments.filter(d => d.id !== id), })
      })
  }



  render() {
    return (
      <Container>
        <Header as="h1" style={{textAlign: "center"}}>The Dream Store</Header>
        <hr />
        <br />
        <Card.Group>
          {this.renderDepartment()}
        </Card.Group>
      </Container>
    );
  };
};

export default Departments;
