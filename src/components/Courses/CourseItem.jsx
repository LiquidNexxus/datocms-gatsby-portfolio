import React,{Component} from 'react';


class CourseItem extends Component{

    render(){
        const {course} = this.props;

        return(
            <article>
              <h3 class="h4 g-mb-15">
                  <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">{course.name}</a>
                </h3>

              <div class="d-lg-flex justify-content-between align-items-center g-mb-15">
                <ul class="list-inline g-mb-10 g-mb-0--lg">
                  <li class="list-inline-item g-mr-30">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="../../assets/img-temp/100x100/img7.jpg" alt="Image Description"/> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">John Doe</a>
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 2 weeks ago
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 722,538
                  </li>
                </ul>

                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                    </a>
                  </li>
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span class="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                        </span>
                      <div class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <p class="g-mb-15">{course.description}</p>

              <span class="js-rating g-color-primary mr-2" data-rating="5"></span>
              <span class="g-color-gray-dark-v5">Relevance 5.0 out of 4902 votes</span>
            </article>
        )
    }
}

export default CourseItem;