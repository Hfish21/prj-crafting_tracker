import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userReports: [],
            store: this.props.store
        }
    }

    componentDidMount() {

    }

    renderNavigation() {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Crafting Tree Tracker
          </Navbar.Brand>
        </Navbar>
      );

    }

    renderResourceInput() {
      return (
        <Form>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label>Resource 1</Form.Label>
          <Form.Control as="select" size="sm" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        </Form>
      );
    }

    render() {
        return (
          <div>
            <div>
              {this.renderNavigation()}
            </div>
            <div>
              {this.renderResourceInput()}
            </div>
          </div>


        );
    }
}

export default App;
