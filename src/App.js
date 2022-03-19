import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import License from './Components/pages/License';
import About from './Components/pages/About';
import ContactUs from './Components/pages/ContactUs';
import Editor from './Components/pages/Editor';
import { useEffect} from 'react';
// import ScrollToTop from './Components/ScrollToTop';



function App() {
  useEffect (() => {
    document.body.style.backgroundColor = '#202020';
  },[]);


  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/editor' component={Editor}/>
          <Route path='/license' component={License}/>
          <Route path='/about' component={About}/>
          <Route path='/contact-us' component={ContactUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
