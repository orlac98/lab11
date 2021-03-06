import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';
//navbar added


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>

          </Navbar>
          <br />
          
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/edit/:id'component={Edit}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


//edit route added in 







//Removed contents of the div
//added a H1 tag
//used piece of code off lab worksheet and added under hello world
//Changed the function to a class
//which extends component 
//Add render() method underneath that wraps the return method or will be an error
//added the header component
//footer component added

//seperate routes added for ech different page

// LAB 3 replaced the footer and header paths to the create and read
export default App;
