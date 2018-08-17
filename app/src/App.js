import React, { Component } from 'react';
import logo from './img/dark-evening.jpg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Navbar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Alex McComb</a>
            </Navbar.Brand>
          </Navbar.Header>
          <div className="Nav">
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another Action</MenuItem>
              <MenuItem eventKey={3.3}>Something Else</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Serperate Link</MenuItem>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My First React App</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
