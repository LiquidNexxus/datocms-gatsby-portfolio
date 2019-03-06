import React from "react";

const Content = ({course}) => {
  return (
    <section class="container g-py-100">
      <div class="row g-mb-50">
        <div class="col-md-8 g-mb-30">
          <div class="mb-5">
            <h2 class="g-color-black mb-1">{course.name}</h2>
            <span class="d-block lead mb-4">Package of the year</span>
            <p>
              {course.description}
            </p>
          </div>

          <a
            class="btn btn-md u-btn-primary g-font-size-default g-rounded-25 g-px-30 g-py-12"
            href="#"
          >
            Launch website
          </a>
        </div>

        <div class="col-md-4 g-mb-30">
          <div class="mb-5">
            <h3 class="h5 g-color-black mb-3">Client:</h3>
            <a
              class="g-color-gray-dark-v4 g-text-underline--none--hover"
              href="#"
            >
              <img
                class="g-width-25 g-height-25 rounded-circle mr-2 mb-1"
                src="assets/img-temp/100x100/img1.jpg"
                alt="Image Description"
              />
              Htmlstream
            </a>
          </div>
          <div class="mb-5">
            <h3 class="h5 g-color-black mb-3">Designers:</h3>
            <ul class="list-unstyled">
              <li class="my-3">
                <img
                  class="g-width-25 g-height-25 rounded-circle mb-1 mr-2"
                  src="assets/img-temp/100x100/img7.jpg"
                  alt="Image Description"
                />
                <a
                  class="g-color-gray-dark-v4 g-text-underline--none--hover"
                  href="#"
                >
                  Alex Teseira
                </a>
              </li>
            </ul>
          </div>
          <div class="g-mb-30">
            <h3 class="h5 g-color-black mb-3">Tags:</h3>
            <ul class="u-list-inline mb-0">
              <li class="list-inline-item g-mb-10">
                <a
                  class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15"
                  href="#"
                >
                  Design
                </a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a
                  class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15"
                  href="#"
                >
                  Art
                </a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a
                  class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15"
                  href="#"
                >
                  Graphic
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-3">
            <h3 class="h5 g-color-black mb-3">Share:</h3>
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-1 mb-1">
                <a class="btn u-btn-outline-facebook g-rounded-25" href="#">
                  <i class="mr-1 fa fa-facebook" />
                  Facebook
                </a>
              </li>
              <li class="list-inline-item mx-1 mb-1">
                <a class="btn u-btn-outline-twitter g-rounded-25" href="#">
                  <i class="mr-1 fa fa-twitter" />
                  Twitter
                </a>
              </li>
              <li class="list-inline-item mx-1 mb-1">
                <a class="btn u-btn-outline-dribbble g-rounded-25" href="#">
                  <i class="mr-1 fa fa-dribbble" />
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="cbp g-mb-100"
        data-controls="#filterControls1"
        data-animation="quicksand"
        data-x-gap="30"
        data-y-gap="30"
        data-media-queries="[{&quot;width&quot;: 1500, &quot;cols&quot;: 3}, {&quot;width&quot;: 1100, &quot;cols&quot;: 3}, {&quot;width&quot;: 800, &quot;cols&quot;: 3}, {&quot;width&quot;: 480, &quot;cols&quot;: 2}, {&quot;width&quot;: 300, &quot;cols&quot;: 1}]"
      >
        <div class="cbp-item identity design">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/800x500/img1.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/800x500/img1.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cbp-item design">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/760x900/img1.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/760x900/img1.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cbp-item graphic identity">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/800x500/img6.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/800x500/img6.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cbp-item graphic">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/800x500/img4.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/800x500/img4.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cbp-item graphic">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/760x900/img2.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/760x900/img2.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cbp-item identity">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/800x500/img3.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/800x500/img3.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cbp-item identity">
          <div class="u-block-hover g-parent">
            <img
              class="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out"
              src="assets/img-temp/800x380/img1.jpg"
              alt="Image description"
            />
            <div class="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
              <div class="align-items-end flex-column mt-auto ml-auto">
                <a
                  class="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle"
                  href="../../assets/img-temp/800x380/img1.jpg"
                >
                  <i class="icon-communication-017 u-line-icon-pro" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="text-center" aria-label="Page Navigation">
        <ul class="list-inline mb-0">
          <li class="list-inline-item float-sm-left">
            <a
              class="u-pagination-v1__item u-pagination-v1-4 g-brd-gray-light-v3 g-brd-primary--hover g-rounded-50 g-pa-7-16"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <i class="fa fa-angle-left" />
                Previous
              </span>
            </a>
          </li>
          <li class="list-inline-item mr-0">
            <a
              class="u-pagination-v1__item g-color-gray-dark-v4 g-font-size-20 g-py-2 g-px-10"
              href="#"
              data-toggle="tooltip"
              data-placement="top"
              title="View All"
            >
              <i class="icon-grid" />
            </a>
          </li>
          <li class="list-inline-item float-sm-right">
            <a
              class="u-pagination-v1__item u-pagination-v1-4 g-brd-gray-light-v3 g-brd-primary--hover g-rounded-50 g-pa-7-16"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">
                Next
                <i class="fa fa-angle-right" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Content;
