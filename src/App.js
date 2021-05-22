import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage';
import Post from './pages/post';
import NotFound from './pages/notfound';




export default function App() {
  return (
    <Router>
      <div className='app'>

        <Header />

        <Route exact path="/" component={Homepage} />
        <Route exact path="/404" component={NotFound}/>
        <Route exact path="/post/:id" render={props => <Post {...props}/>} />

        <Footer />
      </div>
    </Router>
  )
}
