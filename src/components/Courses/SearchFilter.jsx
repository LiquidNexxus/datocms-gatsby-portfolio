import React,{Component} from 'react';


class SearchFilter extends Component{

    render(){
        return(
            <div class="col-lg-3 g-pr-40--lg g-mb-50 g-mb-0--lg">
            <h2 class="h5 text-uppercase g-color-gray-dark-v1">Categories</h2>
            <hr class="g-brd-gray-light-v4 g-my-15"/>
            <ul class="list-unstyled g-mb-40">
              <li class="my-3">
                <a class="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1 g-parent" href="#">
                    Design <span class="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 text-center rounded g-px-10 g-py-3">99</span>
                  </a>
              </li>
              <li class="my-3">
                <a class="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                    Development <span class="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">5</span>
                  </a>
              </li>
              <li class="my-3">
                <a class="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                    Services <span class="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">15</span>
                  </a>
              </li>
              <li class="my-3">
                <a class="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                    Support <span class="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">12</span>
                  </a>
              </li>
              <li class="my-3">
                <a class="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                    Investment <span class="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">5</span>
                  </a>
              </li>
              <li class="my-3">
                <a class="d-flex justify-content-between u-link-v5 g-color-gray-dark-v1" href="#">
                    Financing <span class="d-inline-block g-font-size-12 g-min-width-40 g-brd-around g-color-gray-dark-v5 g-brd-gray-light-v3 g-bg-primary--parent-hover text-center rounded g-px-10 g-py-3">1</span>
                  </a>
              </li>
            </ul>

            <h2 class="h5 text-uppercase g-color-gray-dark-v1">Tags</h2>
            <hr class="g-brd-gray-light-v4 g-my-15"/>
            <ul class="list-inline g-mb-40">
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web Design</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Unify</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Template</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">HTML</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">CSS</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Mobile</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">iOS</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">UI</a>
              </li>
              <li class="list-inline-item my-2">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web</a>
              </li>
            </ul>

            <h2 class="h5 text-uppercase g-color-gray-dark-v1">Sort By</h2>
            <hr class="g-brd-gray-light-v4 g-my-15"/>
            <div class="btn-group justified-content g-mb-40">
              <label class="u-check">
                <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio" checked />
                <span class="btn btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked rounded-0">Date Added</span>
              </label>
              <label class="u-check">
                <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroupBtn1_1" type="radio"/>
                <span class="btn btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked g-brd-left-none--md rounded-0">Relevance</span>
              </label>
            </div>

            <h2 class="h5 text-uppercase g-color-gray-dark-v1">Result Types</h2>
            <hr class="g-brd-gray-light-v4 g-my-15"/>
            <form>
              <div class="form-group g-mb-10">
                <label class="u-check g-pl-30">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"/>
                  <div class="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                    <i class="fa" data-check-icon="&#xf00c"></i>
                  </div>
                  Design
                </label>
              </div>

              <div class="form-group g-mb-10">
                <label class="u-check g-pl-30">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" checked/>
                  <div class="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                    <i class="fa" ></i>
                  </div>
                  Development
                </label>
              </div>

              <div class="form-group g-mb-10">
                <label class="u-check g-pl-30">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"/>
                  <div class="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                    <i class="fa" data-check-icon="&#xf00c"></i>
                  </div>
                  Services
                </label>
              </div>

              <div class="form-group g-mb-10">
                <label class="u-check g-pl-30">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"/>
                  <div class="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                    <i class="fa" data-check-icon="&#xf00c"></i>
                  </div>
                  Support
                </label>
              </div>

              <div class="form-group g-mb-10">
                <label class="u-check g-pl-30">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox"/>
                  <div class="u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                    <i class="fa" data-check-icon="&#xf00c"></i>
                  </div>
                  Investment
                </label>
              </div>
            </form>
          </div>
        )
    }
}

export default SearchFilter;