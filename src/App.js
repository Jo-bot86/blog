import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage';




export default function App() {
  return (
    <Router>
      <div className='app'>

        <Header />

        <Route exact path="/" component={Homepage} />  

        <Footer />
      </div>
    </Router>
  )
}
