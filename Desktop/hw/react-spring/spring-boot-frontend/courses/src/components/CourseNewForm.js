import React from 'react';

const CourseNewForm = (props) => {
  return (
  <div>
    <h3>Add A Class!</h3>
    <form onSubmit={props.submitForm}>
      <label htmlFor="name">users</label>
      <input
        type="text"
        label="name"
        value={props.name}
        onChange={props.handleNameChange}
        id="name"
        placeholder=" name here!"
      />
      <label htmlFor="code">code</label>
      <input
        type="text"
        label="code"
        value={props.code}
        onChange={props.handleCodeChange}
        id="code"
        placeholder="course code here!"
      />
      <input type="submit" value="Create!" />
    </form>
  </div>
)
}
export default CourseNewForm
