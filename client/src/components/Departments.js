import React, { Fragment, } from 'react';
import axios from "axios"; 
import { Container, } from "semantic-ui-react";


class Departments extends React.Component {

state = { departments: [], }


componentDidMount() {
  axios.get("/api/departments")
    .then(res => {
      this.setState({ departments: res.data })
    })
  }




  render() {
    return (
      <div> Hello</div>
    );
  };
};

export default Departments;
