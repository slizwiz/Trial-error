import React, { Component } from 'react'
import './App.css';
import Course from './components/Course'
import CourseList from './components/CoursesList'
import CourseNewForm from './components/CourseNewForm'

class App extends Component {
  render() {
    return (
      <div>
        <CourseList />
      </div>
    )
  }
}

export default App
