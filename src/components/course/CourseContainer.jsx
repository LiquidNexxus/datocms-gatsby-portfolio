import React, { Component } from "react";
import Breadcrumbs from "./BreadCrumbs";
import Content from "./Content";
import Related from "./Related";
import $ from 'jquery'

class CourseContainer extends Component {
  render() {
    const {course} = this.props
    return (
      <>
        <Breadcrumbs title={course.name}/>
        <Content course={course}/>
        <Related />
      </>
    );
  }
}

export default CourseContainer;
