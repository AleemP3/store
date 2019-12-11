import React, { } from 'react';
import { Container, Header, Card, Button} from "semantic-ui-react";
import { Link, } from 'react-router-dom';

import axios from "axios"; 




class Department extends React.Component {

  state = { department: {}, items: [], }

  componentDidMount() {    
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ department: res.data });
      })
      axios.get(`/api/departments/${this.props.match.params.id}/items`)
        .then(res => {
          this.setState({ items: res.data })
        })
    }


    renderItems = () => {
      if (this.state.items.length <= 0)
      return <h2>No Products</h2>
    return this.state.items.map( item => (
      <Card>
        <Card.Content>
          <Card.Header>{ item.name }</Card.Header>
          <Card.Description>
            { item.description } - ${ item.cost }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="red" onClick={() => this.deleteItem(item.id)}>Delete</Button>
          <Button color="green" as={Link} 
          to={`/departments/${this.props.match.params.id}/edititem/${item.id}/${item.name}/${item.description}/${item.cost}`}>
            Edit
          </Button>
        </Card.Content>
      </Card>
      ))
    }

    deleteItem = (id) => {
      axios.delete(`/api/departments/${this.props.match.params.id}/items/${id}`)
      .then(res => {
        this.setState({ items: this.state.items.filter(item => item.id !== id), })
      })
    }

  render() {
    const {name} = this.state.department;
    return (
      <Container>
        <Header as="h1" style={{textAlign: "Center"}}>{name}</Header>
        <Button as={Link} to={`/departments/${this.state.department.id}/item/new`}
          color="blue"
        >
          Add Item
        </Button>
        <hr />
        <br />
        <Card.Group>
          {this.renderItems()}
        </Card.Group>
      </Container>
    );
  };
};

export default Department;