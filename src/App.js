import React from 'react'

import {Header, Footer, Blog, Features, Intro} from './containers';
import {CTA, Brand, Navbar} from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Intro />
      <Features />
      <CTA />
      <Blog />
      <Footer />      
    </div>
  )
}

export default App