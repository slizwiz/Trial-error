import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Bio from './components/Bio' ;
import Contact from './components/Contact';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Projects from './components/Projects'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
        <Header></Header>
				<div id="colorlib-main">
					<About></About>
					<Bio></Bio>
          <Contact></Contact>
          <Contact></Contact>
          <Header></Header>
          <Jobs></Jobs>
          <Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
