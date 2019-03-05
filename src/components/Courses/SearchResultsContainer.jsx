import React,{Component} from 'react';
import SearchResults from './SearchResults';
import SearchFilter from './SearchFilter'

class SearchResultsContainer extends Component{

    render(){
        const {courses} = this.props
        return(
          <section class="g-pt-50 g-pb-90">
            <div class="container">
              <div class="row"> 
                <SearchFilter/>
                <SearchResults courses={courses}/>
              </div>
            </div>
          </section>
        )
    }
}

export default SearchResultsContainer;