import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/shared/layout"
import CourseContainer from '../components/course/CourseContainer'

export default ({ data }) => {
  const course = data.datoCmsCourse
  return(
  <Layout>
    <CourseContainer course={course}/>
  </Layout>
)}

export const query = graphql`
  query CourseQuery($slug: String!) {
    datoCmsCourse(slug: { eq: $slug }) {
      name,
      description
    }
  }
`