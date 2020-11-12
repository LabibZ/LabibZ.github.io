import React from 'react';
import './App.css';
import './style.css';
import './index.css';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Menu from './components/menu';
import Footer from './components/footer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu/>
        <Switch> 
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
