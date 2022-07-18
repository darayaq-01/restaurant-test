import React from "react";
import Calendar from "react-calendar";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Dashboard = () => {
  return (
    <div className='App-header'>
      <h1>Restaurant Leipzig</h1>
      <h2>Choose a day</h2>
      <div className='calendar'>
        <Calendar />
      </div>
      <h2>Choose a table</h2>
      <Container className='container'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>12.05.2022, 11 pm</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>12.05.2022, 11 pm</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>12.05.2022, 11 pm</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;
