import React from "react";
import PropTypes from "prop-types";

const test = props => {
  return (
    <div class="shortcode-html">
      <div class="row">
        <div class="col-lg-6">
          <div class="row g-mx-5--sm g-mb-30">
            <div class="col-sm-5 g-px-0--sm">
              <div
                class="g-height-200 g-bg-size-cover"
                style={{
                  backgroundImage: "url(assets/img-temp/500x450/img3.jpg)"
                }}
              />
            </div>

            <div class="col-sm-7 g-px-0--sm">
              <div class="u-info-v1-1 g-height-200 g-bg-white g-bg-white-gradient-v1--after g-pa-20-30-0">
                <h3 class="h6 g-font-weight-600 text-uppercase">
                  <a
                    class="u-link-v5 g-color-black g-color-primary--hover"
                    href="#"
                  >
                    Tempor volutpat sed leout
                  </a>
                </h3>
                <p class="small g-color-primary">
                  <time>April 27, 2016</time>
                </p>

                <p>
                  Morbi et convallis metus, in congue mi. Nam placerat augue nec
                  justo feugiat ipsum a quam luctus, id lobortis augue tempor.
                  In feugiat ipsum a quam lacinia eleifend sem dapibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

test.propTypes = {};

export default test;
