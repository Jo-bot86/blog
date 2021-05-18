import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Header from './components/header/header';
//import Body from './components/body/body';
import Footer from './components/footer/footer';
import Homepage from './components/pages/homepage';
import MediaQuerie from './components/pages/mediaQuerie';
import GPG from './components/pages/gpg';
import CSS from './components/pages/css';
import Intro from './components/pages/MERN/intro';



export default function App() {
  return (
    <Router>
      <div className='app'>

        <Header />

        <Route exact path="/" component={Homepage} />

        <p>
          <Link to="/mediaQuerie" style={{ textDecoration: "none", color: "white", fontSize: "large" }}>Media querie {new Date().toLocaleDateString()}</Link>
        </p>

        <Route exact path="/mediaQuerie" component={MediaQuerie} />

        <p>
          <Link to="/gpg" style={{ textDecoration: "none", color: "white" }}>GPG</Link>
        </p>

        <Route exact path="/gpg" component={GPG} />

        <p>
          <Link to="/css" style={{ textDecoration: "none", color: "white" }}>CSS</Link>
        </p>

        <Route exact path="/css" component={CSS} />

        <p>
          <Link to="/mern-intro" style={{ textDecoration: "none", color: "white" }}>Mern Intro</Link>
        </p>

        <Route exact path="/mern-intro" component={Intro} />

        
        <Footer />


      </div>
    </Router>
  )
}
