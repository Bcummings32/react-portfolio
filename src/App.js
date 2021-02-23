
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import each component in here and construct
import About from './pages/About.js';
import NavigationBar from './pages/Navbar.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';



class App extends Component  {
  render() {
  return (
    // <p>Hello</p>
//     <div>
//       <NavBar />
//     <About />
//     <Portfolio />
//     <Contact />
// </div>

//try different router

    <Router>
    <NavigationBar tagline="Hello Friends"/>
    <Switch>
      <Route path ="/about" component={About} />
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
      
    
    </Switch>
  </Router>

  );
  }
}

export default App;
