import React, {  } from 'react';
import axios from "axios"; 
import { Link, } from 'react-router-dom';
import { Container, Header, Card, Button} from "semantic-ui-react";
import styled from 'styled-components';


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
          <Card.Header fColor="color">{d.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <DeleteButton onClick={() => this.deleteDepartment(d.id)}>Delete</DeleteButton>
          <EditButton color="green" as={Link} to={`/departments/edit/${d.name}/${d.id}`}>Edit</EditButton>
          <ViewButton color="blue" as={Link} to={`/departments/${d.id}`}>View</ViewButton>
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
        <HeaderName fColor>Departments</HeaderName>
        <Card.Group>
          {this.renderDepartment()}
        </Card.Group>
      </Container>
    );
  };
};

const DeleteButton = styled(Button)`
  display: flex;
  background: #ffad99 !important;
  padding: 10px 30px;
  justify-content: center;
  transition: background 0.5s ease;
  cursor: pointer;

  &:hover {
    background: #ff3300 !important;
    transition: background 0.5s ease;
  }
`;

const EditButton = styled.a`
  float: right;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: #b3ffcc;
  transition: background 0.5s ease;
  cursor: pointer;

  &:hover {
    background: #66ff99;
    transition: background 0.5s ease;
  }
`;

const ViewButton = styled.a`
  float: center;
  padding: 10px 28px;
  border-radius: 10px;
  background: #99e6ff !important;
  transition: background 0.5s ease;
  cursor: pointer;

  &:hover {
    background: #33ccff !important;
    transition: background 0.5s ease;
  }
`;

const HeaderName = styled.h1`
  color: ${props => props.fColor ? `#ffcc66` : `#ffe6b3` }; 
`;

export default Departments;
