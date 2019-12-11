import React from 'react';
import { Navbar } from 'react-bootstrap';


function navBar() {

  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Payment Register</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default(navBar);


