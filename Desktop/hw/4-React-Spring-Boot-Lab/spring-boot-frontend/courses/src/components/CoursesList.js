import React, { Component } from 'react'

import Course from './Course'
import CourseNewForm from './CourseNewForm'

class CourseList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        courses: [],
        apiDataLoaded: false,
        name: '',
        code: ''
      }
    }

    componentDidMount() {
      fetch("http://localhost:8080/course/list")
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.setState({
            courses: response,
            apiDataLoaded: true
          })
        })
    }

    submitForm = (e) => {
      e.preventDefault();
      fetch("http://localhost:8080/course/post", {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          code: this.state.code
        })
      })
      .then(res => res.json())
      .then(res => {
        let courses = this.state.courses;
        courses.push(res);
        this.setState({
          courses: courses,
          code: '',
          name: ''
        });
      })
    }

    handleCodeChange = (e) => {
      this.setState({ code: e.target.value })
    }

    handleNameChange = (e) => {
      this.setState({ name: e.target.value })
    }

    renderCourses() {
      return this.state.courses.map((course, key) => {
        return <Course course={course} key={key} />
      })
    }

    render() {
      return (
        <div className="App">
          {this.state.apiDataLoaded ? this.renderCourses() : <p>Courses coming soon!</p>}
          <CourseNewForm
            Name={this.state.name}
            code={this.state.code}
            handleCodeChange={this.handleCodeChange}
            handleNameChange={this.handleNameChange}
            submitForm={this.submitForm}
          />
        </div>
      );
    }
  }


export default CourseList
