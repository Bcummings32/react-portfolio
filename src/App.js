import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import each component in here and construct

function App() {
  return (
    <Router>
    <NavBar tagline="Hello Friends"/>
    <Switch>
      <Route exact path ="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      <Route component={Home}/>
    </Switch>
  </Router>

  );
}

export default App;
