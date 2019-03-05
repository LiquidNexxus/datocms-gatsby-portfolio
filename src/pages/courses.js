import React,{Component} from 'react';
import { Link,graphql} from 'gatsby';
import Layout from '../components/shared/layout';
import SearchHero from '../components/Courses/SearchHero';
import SearchResultsContainer from '../components/Courses/SearchResultsContainer';

class Courses extends Component{

    render(){

        const {data} = this.props;
        const courses =  data.allDatoCmsCourse.edges 


        return(
        <Layout>
            <SearchHero />
            <SearchResultsContainer courses={courses}/>
        </Layout>
        )
    }
}

export const query = graphql`
    query CoursesQuery {
        allDatoCmsCourse{
            edges{
                node{
                id,
                name,
                description
                }
            }
        }
    }
`

export default Courses;