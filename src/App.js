import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm'
import About from './components/About'
import Athletes from './components/Athletes'
import Home from './components/Home'
import Statistics from './components/Statistics'

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
        <Menu inverted >
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/statistics'>Statistics</Menu.Item>
          <Menu.Item as={Link} to='/athletes'>Athletes</Menu.Item>
          <Menu.Item as={Link} to='/about'>About</Menu.Item>
          <Menu.Item as={Link} to='/login'>Log in</Menu.Item>
        </Menu>
        <Route path="/" exact component={Home} />
        <Route path="/statistics/" component={Statistics} />
        <Route path="/athletes/" component={Athletes} />
        <Route path="/about/" component={About} />
        <Route path="/login/" component={LoginForm} />
        </Router>
      </Container>
    )
  }
}

const styles = {
  login: {
    position: 'relative',
    float: 'right'
  }
}

export default App;