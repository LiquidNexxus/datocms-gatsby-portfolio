import React,{Component} from 'react';
import CourseItem from './CourseItem'

class SearchResults extends Component{

    render(){
        const {courses} =  this.props;
        const courseItems = courses.map(  course => (
            <CourseItem course={course.node}/>
        ))
        return(
            <div class="col-lg-9">
            <div class="d-md-flex justify-content-between g-mb-30">
              <h3 class="h6 text-uppercase g-mb-10 g-mb--lg">About <span class="g-color-gray-dark-v1">384,907</span> results</h3>
              <ul class="list-inline">
                <li class="list-inline-item g-mr-30">
                  <a class="u-link-v5 g-color-gray-dark-v5 g-color-gray-dark-v5--hover" href="#">
                    <i class="icon-list g-pos-rel g-top-1 g-mr-5"></i> List View
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">
                    <i class="icon-grid g-pos-rel g-top-1 g-mr-5"></i> Grid View
                  </a>
                </li>
              </ul>
            </div>

            {courseItems}
            
            <hr class="g-brd-gray-light-v4 g-my-40"/>

            <nav class="g-mb-50" aria-label="Page Navigation">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i class="fa fa-angle-left"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11" href="#">1</a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">2</a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">3</a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <span class="g-pa-4-11">...</span>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">80</a>
                </li>
                <li class="list-inline-item">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-angle-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
                <li class="list-inline-item float-right">
                  <span class="u-pagination-v1__item-info g-pa-4-11">Page 1 of 80</span>
                </li>
              </ul>
            </nav>

            <h3 class="h5 g-color-gray-dark-v1 g-mb-20">Searches Related to Unify Template</h3>

            <ul class="u-list-inline mb-0">
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Wrapbootstrap</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web Design</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Best Responsive Bootstrap Template</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Thematic Pages</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Corporate &amp; Business Template</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">SASS</a>
              </li>
            </ul>
          </div>
        )
    }
}

export default SearchResults;