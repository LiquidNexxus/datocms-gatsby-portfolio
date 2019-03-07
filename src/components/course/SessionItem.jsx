import React from "react";

const SessionItem = ({ agenda }) => {
  console.log(agenda);
  const startDate = new Date(agenda.sessionStartTimeC);
  const endDate = new Date(agenda.sessionEndTimeC);
  return (
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
                {agenda.name}
              </a>
            </h3>
            <p class="small g-color-primary">
              <time>{startDate.toDateString()}</time> -{" "}
              <time>{endDate.toDateString()}</time>
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: agenda.sessionAbstractCNode.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionItem;
